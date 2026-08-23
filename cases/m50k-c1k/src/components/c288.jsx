import React from 'react';
const LABEL_288 = 'component_288';
export function Component288({ value = 288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_288, 'data-value': derived.doubled }, children);
}
export default Component288;
