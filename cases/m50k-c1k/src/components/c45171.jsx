import React from 'react';
const LABEL_45171 = 'component_45171';
export function Component45171({ value = 45171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45171, 'data-value': derived.doubled }, children);
}
export default Component45171;
