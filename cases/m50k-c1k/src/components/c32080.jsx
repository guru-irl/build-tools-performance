import React from 'react';
const LABEL_32080 = 'component_32080';
export function Component32080({ value = 32080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32080, 'data-value': derived.doubled }, children);
}
export default Component32080;
