import React from 'react';
const LABEL_39430 = 'component_39430';
export function Component39430({ value = 39430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39430, 'data-value': derived.doubled }, children);
}
export default Component39430;
