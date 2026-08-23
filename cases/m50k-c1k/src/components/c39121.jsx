import React from 'react';
const LABEL_39121 = 'component_39121';
export function Component39121({ value = 39121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39121, 'data-value': derived.doubled }, children);
}
export default Component39121;
