import React from 'react';
const LABEL_32996 = 'component_32996';
export function Component32996({ value = 32996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32996, 'data-value': derived.doubled }, children);
}
export default Component32996;
