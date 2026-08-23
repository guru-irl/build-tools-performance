import React from 'react';
const LABEL_14006 = 'component_14006';
export function Component14006({ value = 14006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14006, 'data-value': derived.doubled }, children);
}
export default Component14006;
