import React from 'react';
const LABEL_29943 = 'component_29943';
export function Component29943({ value = 29943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29943, 'data-value': derived.doubled }, children);
}
export default Component29943;
