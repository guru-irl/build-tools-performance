import React from 'react';
const LABEL_26489 = 'component_26489';
export function Component26489({ value = 26489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26489, 'data-value': derived.doubled }, children);
}
export default Component26489;
