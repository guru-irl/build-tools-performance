import React from 'react';
const LABEL_3902 = 'component_3902';
export function Component3902({ value = 3902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3902, 'data-value': derived.doubled }, children);
}
export default Component3902;
