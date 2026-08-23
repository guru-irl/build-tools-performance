import React from 'react';
const LABEL_45241 = 'component_45241';
export function Component45241({ value = 45241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45241, 'data-value': derived.doubled }, children);
}
export default Component45241;
