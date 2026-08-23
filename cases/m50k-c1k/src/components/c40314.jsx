import React from 'react';
const LABEL_40314 = 'component_40314';
export function Component40314({ value = 40314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40314, 'data-value': derived.doubled }, children);
}
export default Component40314;
