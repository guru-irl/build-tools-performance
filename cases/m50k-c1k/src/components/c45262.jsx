import React from 'react';
const LABEL_45262 = 'component_45262';
export function Component45262({ value = 45262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45262, 'data-value': derived.doubled }, children);
}
export default Component45262;
