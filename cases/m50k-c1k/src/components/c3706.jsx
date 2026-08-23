import React from 'react';
const LABEL_3706 = 'component_3706';
export function Component3706({ value = 3706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3706, 'data-value': derived.doubled }, children);
}
export default Component3706;
