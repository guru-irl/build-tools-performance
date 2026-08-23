import React from 'react';
const LABEL_29351 = 'component_29351';
export function Component29351({ value = 29351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29351, 'data-value': derived.doubled }, children);
}
export default Component29351;
