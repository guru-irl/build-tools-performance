import React from 'react';
const LABEL_36163 = 'component_36163';
export function Component36163({ value = 36163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36163, 'data-value': derived.doubled }, children);
}
export default Component36163;
