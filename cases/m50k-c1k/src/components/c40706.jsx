import React from 'react';
const LABEL_40706 = 'component_40706';
export function Component40706({ value = 40706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40706, 'data-value': derived.doubled }, children);
}
export default Component40706;
