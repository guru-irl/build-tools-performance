import React from 'react';
const LABEL_29845 = 'component_29845';
export function Component29845({ value = 29845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29845, 'data-value': derived.doubled }, children);
}
export default Component29845;
