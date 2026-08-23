import React from 'react';
const LABEL_28049 = 'component_28049';
export function Component28049({ value = 28049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28049, 'data-value': derived.doubled }, children);
}
export default Component28049;
