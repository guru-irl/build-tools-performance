import React from 'react';
const LABEL_38912 = 'component_38912';
export function Component38912({ value = 38912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38912, 'data-value': derived.doubled }, children);
}
export default Component38912;
