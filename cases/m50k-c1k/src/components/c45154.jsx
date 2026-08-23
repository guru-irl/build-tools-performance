import React from 'react';
const LABEL_45154 = 'component_45154';
export function Component45154({ value = 45154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45154, 'data-value': derived.doubled }, children);
}
export default Component45154;
