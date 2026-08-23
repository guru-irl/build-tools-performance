import React from 'react';
const LABEL_20265 = 'component_20265';
export function Component20265({ value = 20265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20265, 'data-value': derived.doubled }, children);
}
export default Component20265;
