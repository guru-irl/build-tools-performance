import React from 'react';
const LABEL_45868 = 'component_45868';
export function Component45868({ value = 45868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45868, 'data-value': derived.doubled }, children);
}
export default Component45868;
