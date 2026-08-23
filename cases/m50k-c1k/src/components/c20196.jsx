import React from 'react';
const LABEL_20196 = 'component_20196';
export function Component20196({ value = 20196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20196, 'data-value': derived.doubled }, children);
}
export default Component20196;
