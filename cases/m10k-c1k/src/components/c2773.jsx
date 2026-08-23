import React from 'react';
const LABEL_2773 = 'component_2773';
export function Component2773({ value = 2773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2773, 'data-value': derived.doubled }, children);
}
export default Component2773;
