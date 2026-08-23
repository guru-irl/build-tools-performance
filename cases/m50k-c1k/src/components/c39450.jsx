import React from 'react';
const LABEL_39450 = 'component_39450';
export function Component39450({ value = 39450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39450, 'data-value': derived.doubled }, children);
}
export default Component39450;
