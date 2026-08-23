import React from 'react';
const LABEL_44288 = 'component_44288';
export function Component44288({ value = 44288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44288, 'data-value': derived.doubled }, children);
}
export default Component44288;
