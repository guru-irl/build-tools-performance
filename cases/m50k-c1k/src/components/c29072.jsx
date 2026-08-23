import React from 'react';
const LABEL_29072 = 'component_29072';
export function Component29072({ value = 29072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29072, 'data-value': derived.doubled }, children);
}
export default Component29072;
