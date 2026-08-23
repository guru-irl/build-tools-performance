import React from 'react';
const LABEL_22288 = 'component_22288';
export function Component22288({ value = 22288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22288, 'data-value': derived.doubled }, children);
}
export default Component22288;
