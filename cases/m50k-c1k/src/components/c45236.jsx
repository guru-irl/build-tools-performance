import React from 'react';
const LABEL_45236 = 'component_45236';
export function Component45236({ value = 45236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45236, 'data-value': derived.doubled }, children);
}
export default Component45236;
