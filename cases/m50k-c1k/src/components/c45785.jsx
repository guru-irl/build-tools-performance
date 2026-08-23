import React from 'react';
const LABEL_45785 = 'component_45785';
export function Component45785({ value = 45785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45785, 'data-value': derived.doubled }, children);
}
export default Component45785;
