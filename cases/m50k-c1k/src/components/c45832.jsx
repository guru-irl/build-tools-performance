import React from 'react';
const LABEL_45832 = 'component_45832';
export function Component45832({ value = 45832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45832, 'data-value': derived.doubled }, children);
}
export default Component45832;
