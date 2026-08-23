import React from 'react';
const LABEL_26408 = 'component_26408';
export function Component26408({ value = 26408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26408, 'data-value': derived.doubled }, children);
}
export default Component26408;
