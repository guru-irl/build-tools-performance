import React from 'react';
const LABEL_14393 = 'component_14393';
export function Component14393({ value = 14393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14393, 'data-value': derived.doubled }, children);
}
export default Component14393;
