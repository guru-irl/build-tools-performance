import React from 'react';
const LABEL_40131 = 'component_40131';
export function Component40131({ value = 40131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40131, 'data-value': derived.doubled }, children);
}
export default Component40131;
