import React from 'react';
const LABEL_18943 = 'component_18943';
export function Component18943({ value = 18943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18943, 'data-value': derived.doubled }, children);
}
export default Component18943;
