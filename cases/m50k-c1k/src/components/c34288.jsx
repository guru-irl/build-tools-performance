import React from 'react';
const LABEL_34288 = 'component_34288';
export function Component34288({ value = 34288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34288, 'data-value': derived.doubled }, children);
}
export default Component34288;
