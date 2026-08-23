import React from 'react';
const LABEL_31424 = 'component_31424';
export function Component31424({ value = 31424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31424, 'data-value': derived.doubled }, children);
}
export default Component31424;
