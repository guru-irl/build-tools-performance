import React from 'react';
const LABEL_19241 = 'component_19241';
export function Component19241({ value = 19241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19241, 'data-value': derived.doubled }, children);
}
export default Component19241;
