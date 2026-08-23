import React from 'react';
const LABEL_39989 = 'component_39989';
export function Component39989({ value = 39989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39989, 'data-value': derived.doubled }, children);
}
export default Component39989;
