import React from 'react';
const LABEL_39028 = 'component_39028';
export function Component39028({ value = 39028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39028, 'data-value': derived.doubled }, children);
}
export default Component39028;
