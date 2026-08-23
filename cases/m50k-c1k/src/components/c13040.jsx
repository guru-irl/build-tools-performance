import React from 'react';
const LABEL_13040 = 'component_13040';
export function Component13040({ value = 13040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13040, 'data-value': derived.doubled }, children);
}
export default Component13040;
