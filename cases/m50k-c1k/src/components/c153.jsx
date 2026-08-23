import React from 'react';
const LABEL_153 = 'component_153';
export function Component153({ value = 153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_153, 'data-value': derived.doubled }, children);
}
export default Component153;
