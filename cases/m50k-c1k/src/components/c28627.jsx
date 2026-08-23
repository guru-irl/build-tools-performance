import React from 'react';
const LABEL_28627 = 'component_28627';
export function Component28627({ value = 28627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28627, 'data-value': derived.doubled }, children);
}
export default Component28627;
