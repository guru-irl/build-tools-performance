import React from 'react';
const LABEL_6436 = 'component_6436';
export function Component6436({ value = 6436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6436, 'data-value': derived.doubled }, children);
}
export default Component6436;
