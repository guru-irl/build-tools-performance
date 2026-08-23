import React from 'react';
const LABEL_44049 = 'component_44049';
export function Component44049({ value = 44049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44049, 'data-value': derived.doubled }, children);
}
export default Component44049;
