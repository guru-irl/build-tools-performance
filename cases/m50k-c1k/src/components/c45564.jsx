import React from 'react';
const LABEL_45564 = 'component_45564';
export function Component45564({ value = 45564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45564, 'data-value': derived.doubled }, children);
}
export default Component45564;
