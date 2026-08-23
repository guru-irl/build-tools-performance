import React from 'react';
const LABEL_40211 = 'component_40211';
export function Component40211({ value = 40211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40211, 'data-value': derived.doubled }, children);
}
export default Component40211;
