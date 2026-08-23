import React from 'react';
const LABEL_39400 = 'component_39400';
export function Component39400({ value = 39400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39400, 'data-value': derived.doubled }, children);
}
export default Component39400;
