import React from 'react';
const LABEL_44627 = 'component_44627';
export function Component44627({ value = 44627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44627, 'data-value': derived.doubled }, children);
}
export default Component44627;
