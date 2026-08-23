import React from 'react';
const LABEL_32543 = 'component_32543';
export function Component32543({ value = 32543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32543, 'data-value': derived.doubled }, children);
}
export default Component32543;
