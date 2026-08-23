import React from 'react';
const LABEL_45312 = 'component_45312';
export function Component45312({ value = 45312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45312, 'data-value': derived.doubled }, children);
}
export default Component45312;
