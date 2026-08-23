import React from 'react';
const LABEL_39995 = 'component_39995';
export function Component39995({ value = 39995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39995, 'data-value': derived.doubled }, children);
}
export default Component39995;
