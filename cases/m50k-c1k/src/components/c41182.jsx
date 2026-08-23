import React from 'react';
const LABEL_41182 = 'component_41182';
export function Component41182({ value = 41182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41182, 'data-value': derived.doubled }, children);
}
export default Component41182;
