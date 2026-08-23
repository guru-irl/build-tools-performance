import React from 'react';
const LABEL_20288 = 'component_20288';
export function Component20288({ value = 20288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20288, 'data-value': derived.doubled }, children);
}
export default Component20288;
