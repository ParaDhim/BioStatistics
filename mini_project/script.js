const flowchartData = {
    "start": {
        "question": "Only one variable of interest?",
        "yes": {
            "question": "One-sample problem?",
            "yes": {
                "question": "Underlying distribution normal or can central-limit theorem be assumed to hold?",
                "yes": {
                    "question": "Inference concerning ?",
                    "yes": {
                        "question": "known?",
                        "yes": "One-sample z test ",
                        "no": "One-sample t test "
                    },
                    "no": {
                        "path": "Inference concerning",
                        "Inference concerning": {
                            "yes": "One-sample chi-square test for variances (Caution: This test is very sensitive to nonnormality) "
                        }
                    }
                },
                "no": {
                    "question": "Underlying distribution is binomial?",
                    "yes": {
                        "path": "One-sample binomial test",
                        "One-sample binomial test": {
                            "question": "normal approximation valid?",
                            "yes": "Normal-theory methods ",
                            "no": "Exact methods "
                        }
                    },
                    "no": {
                        "question": "Underlying distribution is Poisson?",
                        "yes": "One-sample Poisson test ",
                        "no": "Use another underlying distribution or use nonparametric methods "
                    }
                }
            },
            "no": "start 1"
        },
        "no": "start 4"
    },
    "start 1": {
        "question": "Two-sample problem?",
        "yes": {
            "question": "Underlying distribution normal or can central-limit theorem be assumed to hold?",
            "yes": {
                "question": "Inferences concerning means?",
                "yes": "start 3",
                "no": {
                    "path": "Inferences concerning variances",
                    "Inference concerning variances": {
                        "yes": "Two-sample F test to compare variances (Caution: This test is very sensitive to nonnormality) "
                    }
                }
            },
            "no": {
                "question": "Underlying distribution is binomial?",
                "yes": {
                    "question": "Are samples independent?",
                    "yes": {
                        "question": "Are all expected values ≥ 5?",
                        "yes": "start 6",
                        "no": "Use Fisher's exact test "
                    },
                    "no": "Use McNemar's test "
                },
                "no": {
                    "question": "Person-time data?",
                    "yes": "start 5",
                    "no": "Use another underlying distribution or use nonparametric methods "
                }
            }
        },
        "no": "start 2"
    },
    "start 2": {
        "question": "Underlying distribution normal or can central-limit theorem be assumed to hold?",
        "yes": "One-way ANOVA ",
        "no": {
            "question": "Categorical data?",
            "yes": "Use R x C contingency-table methods ",
            "no": "Use another underlying distribution or use nonparametric methods such as Kruskal-Wallis test "
        }
    },
    "start 3": {
        "question": "Are samples independent?",
        "yes": {
            "question": "Are variances of two samples significantly different? Note: Test using F test",
            "yes": "Use two-sample t test with unequal variances ",
            "no": "Use two-sample t test with equal variances "
        },
        "no": "Use paired t test "
    },
    "start 4": {
        "question": "Interested In relationship between two variables?",
        "yes": {
            "question": "Both variables continuous?",
            "yes": {
                "question": "Interested In predicting One Variable from another?",
                "yes": "Simple linear regression",
                "no": {
                    "path": "Interested in studying the correlation between two variables",
                    "Interested in studying the correlation between two variables": {
                        "yes": {
                            "question": "Both Variables Normal?",
                            "yes": "Pearson correlation methods ",
                            "no": "Rank- correlation methods "
                        }
                    }
                }
            },
            "no": {
                "question": "One variable continuous and one categorical?",
                "yes": {
                    "path": "Analysis of Variance (ANOVA)",
                    "Analysis of Variance (ANOVA)": {
                        "yes": {
                            "question": "Number Of ways in which categorical variables can be classified?",
                            "1": {
                                "question": "Outcome Variable normal or can central-limit theorem be assumed to hold?",
                                "yes": {
                                    "question": "Other covariates to be controlled for?",
                                    "yes": "One-way ANOVA ",
                                    "no": "One-way ANOVA "
                                },
                                "no": {
                                    "path": "Non-Parametric ANOVA",
                                    "Non-Parametric ANOVA": {
                                        "yes": "Kruskal-Wallis test "
                                    }
                                }
                            },
                            "2": {
                                "question": "Other covariates to be controlled for?",
                                "yes": "Two-way ANOVA ",
                                "no": "Two-way ANOVA "
                            },
                            ">2": {
                                "question": "Other covariates to be controlled for?",
                                "yes": "Higher-way ANOVA ",
                                "no": "Higher-way ANOVA "
                            }
                        }
                    }
                },
                "no": {
                    "question": "Ordinal Data?",
                    "yes": "Rank-correlation methods ",
                    "no": {
                        "path": "Both Variables Categorical",
                        "Both Variables Categorical": {
                            "yes": {
                                "question": "Intrested in tests of association or reproducibility?",
                                "association": "Use contingency table methods ",
                                "reproducibility": "Use Kappa statistic "
                            }
                        }
                    }
                }
            }
        },
        "no": {
            "path": "More than two variables Of Interest",
            "More than two variables Of Interest": {
                "question": "Outcome variable continuous or binary?",
                "continuous": "Multiple- regression methods ",
                "binary": {
                    "question": "Time of events important?",
                    "yes": {
                        "path": "Survival Analysis Methods",
                        "Survival Analysis Methods": {
                            "yes": "start 5"
                        }
                    },
                    "no": "Multiple logistic regression methods "
                }
            }
        }
    },
    "start 5": {
        "question": "One-sample problem?",
        "yes": "Use one sample test for incidence rates ",
        "no": {
            "question": "Incidence rates remain constant over time?",
            "yes": {
                "question": "Two-sample problem?",
                "yes": "Use two-sample test for comparison of incidence rates, if no confounding is present, or methods for stratified person-time data, if confounding is present ",
                "no": {
                    "path": "Interested in test of trend over more than two exposure groups",
                    "Interested in test of trend over more than two exposure groups": {
                        "yes": "Use test of trend for incidence rates "
                    }
                }
            },
            "no": {
                "path": "Use survival-analysis methods",
                "Use survival-analysis methods": {
                    "yes": {
                        "question": "Interested in comparison of survival curves of two groups with limited control of covariates?",
                        "yes": "Use log-rank test ",
                        "no": {
                            "path": "Interested in effects of several risk factors on survival",
                            "Interested in effects of several risk factors on survival": {
                                "yes": {
                                    "question": "Willing to assume several curve comes from a Weibull distribution?",
                                    "yes": "Use parameter survival methods based on Weibull distribution ",
                                    "no": "Use Cox proportional hazards model "
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "start 6": {
        "question": "2 x 2 contingency table?",
        "yes": "Use two-sample test for binomial proportions, or 2 x 2 contingency-table methods if no confounding is present, or the Mantel-Haenszel test if confounding is present ",
        "no": {
            "question": "2 x k contingency table?",
            "yes": {
                "question": "Interested in trend over k binomial proportions?",
                "yes": "Use chi-square test for trend, if no confounding is present, or the Mantel Extension test if confounding is present ",
                "no": "Use chi-square test for heterogeneity for 2 x k tables "
            },
            "no": "R x C contingency table, R > 2, C > 2",
            "R x C contingency table, R > 2, C > 2": {
                "yes": "Use chi-square test for R x C tables "
            }
        }
    }
}

// Function to reload the page
function restart() {
    window.location.reload();
}

// Function to display message
function showMessage(message) {
    // Set the message text in the output area
    document.getElementById('output').innerText = message;
}

// Function to clear the input area
function clearInputArea() {
    // Clear the content of the input area
    document.getElementById('inputArea').innerHTML = '';
}

// Function to add the restart button
function addRestartButton() {
    // Get the input area element
    const inputArea = document.getElementById('inputArea');
    // Create a restart button element
    const restartButton = document.createElement('button');
    // Set the button text
    restartButton.innerText = 'Restart';
    // Set the button class
    restartButton.className = 'restart-button';
    // Set the onclick event to call the restart function
    restartButton.onclick = restart;
    // Append the restart button to the input area
    inputArea.appendChild(restartButton);
}

// Function to go back to the previous state
function goBack() {
    // Check if the history stack has elements
    if (historyStack.length > 0) {
        // Remove the last state from the history stack
        historyStack.pop();
        // Check if there are still elements in the history stack
        if (historyStack.length > 0) {
            // Navigate to the previous state
            navigate(historyStack.pop());
        } else {
            // If the history stack is empty, restart the application
            restart();
        }
    }
}

// Function to add the back button
function addBackButton() {
    // Get the input area element
    const inputArea = document.getElementById('inputArea');
    // Create a back button element
    const backButton = document.createElement('button');
    // Set the button text
    backButton.innerText = 'Back';
    // Set the button class
    backButton.className = 'back-button';
    // Set the onclick event to call the goBack function
    backButton.onclick = goBack;
    // Append the back button to the input area
    inputArea.appendChild(backButton);
}

// Function to display options
function displayOptions(node, options) {
    // Get the input area element
    const inputArea = document.getElementById('inputArea');
    // Clear the existing content of the input area
    inputArea.innerHTML = '';

    // Iterate through each option
    for (const option of options) {
        // Get the value associated with the option
        const optionValue = node[option];
        // Create a button element for the option
        const button = document.createElement('button');
        // Set the button text
        button.innerText = option;
        // Set the onclick event to navigate to the selected option
        button.onclick = () => navigate(optionValue);
        // Append the button to the input area
        inputArea.appendChild(button);
    }
    // and a new line
    inputArea.appendChild(document.createElement('br'));

    // Add the back button and restart button
    addBackButton();
    addRestartButton();
}

// Variable to track the navigation history
let historyStack = [];

// Function to start the navigation process
function startNavigation() {
    // Clear the input area and reset the history stack
    clearInputArea();
    historyStack = [];
    // Navigate to the start node of the flowchart
    navigate(flowchartData["start"]);
}


// Function to navigate through the flowchart
function navigate(node) {
    // Check if the node is a string (indicating a leaf node)
    if (typeof node === 'string') {
        // Check if the node is a start node
        if (node.startsWith('start')) {
            // Extract the start index from the node string
            const startIndex = parseInt(node.split(' ')[1], 10);
            // Retrieve the start node from the flowchart data
            const startNode = flowchartData[`start ${startIndex}`];
            // Navigate to the start node
            navigate(startNode);
        } else {
            // Display the message for the leaf node
            showMessage(node);
            // Clear the input area and add the back button and restart button
            clearInputArea();
            addBackButton();
            addRestartButton();
        }
        return;
    }

    // Extract the question and path from the node
    const question = node.question;
    const path = node.path;

    // Push the current node to the history stack
    historyStack.push(node);

    // Check if the node is a question node
    if (question) {
        // Display the question message
        showMessage(question);
        // Extract the options from the node and display them
        const options = Object.keys(node).filter(key => key !== 'question' && key !== 'path');
        displayOptions(node, options);
    } else if (path) {
        // Display the path message
        showMessage(path);
        // Extract the path options from the node and display them
        const pathOptions = node[path] || {};
        const options = Object.keys(pathOptions).filter(key => key !== 'question');
        displayOptions(pathOptions, options);
    } else {
        // If the node has no question or path, clear the input area
        clearInputArea();
    }
}

// Get the input area element
const inputArea = document.getElementById('inputArea');
// Create the start button element
const startButton = document.createElement('button');
// Set the start button text
startButton.innerText = 'Start';
// Set the start button class
startButton.className = 'start-button';
// Add an event listener to the start button to initiate navigation
startButton.addEventListener('click', startNavigation);
// Append the start button to the input area
inputArea.appendChild(startButton);
