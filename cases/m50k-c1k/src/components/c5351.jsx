import React from 'react';
const LABEL_5351 = 'component_5351';
export function Component5351({ value = 5351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5351, 'data-value': derived.doubled }, children);
}
export default Component5351;
