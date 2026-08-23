import React from 'react';
const LABEL_32596 = 'component_32596';
export function Component32596({ value = 32596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32596, 'data-value': derived.doubled }, children);
}
export default Component32596;
