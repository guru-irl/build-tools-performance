import React from 'react';
const LABEL_18902 = 'component_18902';
export function Component18902({ value = 18902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18902, 'data-value': derived.doubled }, children);
}
export default Component18902;
