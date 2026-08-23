import React from 'react';
const LABEL_18644 = 'component_18644';
export function Component18644({ value = 18644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18644, 'data-value': derived.doubled }, children);
}
export default Component18644;
