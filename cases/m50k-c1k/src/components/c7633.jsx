import React from 'react';
const LABEL_7633 = 'component_7633';
export function Component7633({ value = 7633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7633, 'data-value': derived.doubled }, children);
}
export default Component7633;
