import React from 'react';
const LABEL_44095 = 'component_44095';
export function Component44095({ value = 44095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44095, 'data-value': derived.doubled }, children);
}
export default Component44095;
