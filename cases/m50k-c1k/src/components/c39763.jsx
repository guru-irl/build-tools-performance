import React from 'react';
const LABEL_39763 = 'component_39763';
export function Component39763({ value = 39763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39763, 'data-value': derived.doubled }, children);
}
export default Component39763;
