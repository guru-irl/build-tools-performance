import React from 'react';
const LABEL_20175 = 'component_20175';
export function Component20175({ value = 20175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20175, 'data-value': derived.doubled }, children);
}
export default Component20175;
