import React from 'react';
const LABEL_45209 = 'component_45209';
export function Component45209({ value = 45209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45209, 'data-value': derived.doubled }, children);
}
export default Component45209;
