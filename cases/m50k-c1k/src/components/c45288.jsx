import React from 'react';
const LABEL_45288 = 'component_45288';
export function Component45288({ value = 45288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45288, 'data-value': derived.doubled }, children);
}
export default Component45288;
