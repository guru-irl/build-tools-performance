import React from 'react';
const LABEL_45880 = 'component_45880';
export function Component45880({ value = 45880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45880, 'data-value': derived.doubled }, children);
}
export default Component45880;
