import React from 'react';
const LABEL_32166 = 'component_32166';
export function Component32166({ value = 32166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32166, 'data-value': derived.doubled }, children);
}
export default Component32166;
