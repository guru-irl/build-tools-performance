import React from 'react';
const LABEL_18040 = 'component_18040';
export function Component18040({ value = 18040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18040, 'data-value': derived.doubled }, children);
}
export default Component18040;
