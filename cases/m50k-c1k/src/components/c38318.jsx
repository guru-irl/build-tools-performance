import React from 'react';
const LABEL_38318 = 'component_38318';
export function Component38318({ value = 38318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38318, 'data-value': derived.doubled }, children);
}
export default Component38318;
