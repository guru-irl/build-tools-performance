import React from 'react';
const LABEL_35288 = 'component_35288';
export function Component35288({ value = 35288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35288, 'data-value': derived.doubled }, children);
}
export default Component35288;
