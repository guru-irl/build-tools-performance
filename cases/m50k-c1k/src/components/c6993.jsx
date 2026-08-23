import React from 'react';
const LABEL_6993 = 'component_6993';
export function Component6993({ value = 6993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6993, 'data-value': derived.doubled }, children);
}
export default Component6993;
