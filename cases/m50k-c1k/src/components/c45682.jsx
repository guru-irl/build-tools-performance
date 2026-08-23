import React from 'react';
const LABEL_45682 = 'component_45682';
export function Component45682({ value = 45682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45682, 'data-value': derived.doubled }, children);
}
export default Component45682;
