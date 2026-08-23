import React from 'react';
const LABEL_6410 = 'component_6410';
export function Component6410({ value = 6410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6410, 'data-value': derived.doubled }, children);
}
export default Component6410;
