import React from 'react';
const LABEL_39980 = 'component_39980';
export function Component39980({ value = 39980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39980, 'data-value': derived.doubled }, children);
}
export default Component39980;
