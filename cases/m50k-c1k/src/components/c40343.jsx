import React from 'react';
const LABEL_40343 = 'component_40343';
export function Component40343({ value = 40343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40343, 'data-value': derived.doubled }, children);
}
export default Component40343;
