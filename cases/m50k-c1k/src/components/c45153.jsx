import React from 'react';
const LABEL_45153 = 'component_45153';
export function Component45153({ value = 45153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45153, 'data-value': derived.doubled }, children);
}
export default Component45153;
