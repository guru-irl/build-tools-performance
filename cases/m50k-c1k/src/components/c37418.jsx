import React from 'react';
const LABEL_37418 = 'component_37418';
export function Component37418({ value = 37418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37418, 'data-value': derived.doubled }, children);
}
export default Component37418;
