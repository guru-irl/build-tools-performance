import React from 'react';
const LABEL_39190 = 'component_39190';
export function Component39190({ value = 39190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39190, 'data-value': derived.doubled }, children);
}
export default Component39190;
