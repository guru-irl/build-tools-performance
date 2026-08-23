import React from 'react';
const LABEL_8949 = 'component_8949';
export function Component8949({ value = 8949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8949, 'data-value': derived.doubled }, children);
}
export default Component8949;
