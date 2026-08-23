import React from 'react';
const LABEL_40288 = 'component_40288';
export function Component40288({ value = 40288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40288, 'data-value': derived.doubled }, children);
}
export default Component40288;
