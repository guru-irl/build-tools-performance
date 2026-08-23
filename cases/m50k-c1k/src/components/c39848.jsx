import React from 'react';
const LABEL_39848 = 'component_39848';
export function Component39848({ value = 39848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39848, 'data-value': derived.doubled }, children);
}
export default Component39848;
