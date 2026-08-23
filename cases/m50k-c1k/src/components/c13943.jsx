import React from 'react';
const LABEL_13943 = 'component_13943';
export function Component13943({ value = 13943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13943, 'data-value': derived.doubled }, children);
}
export default Component13943;
