import React from 'react';
const LABEL_27293 = 'component_27293';
export function Component27293({ value = 27293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27293, 'data-value': derived.doubled }, children);
}
export default Component27293;
