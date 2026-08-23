import React from 'react';
const LABEL_6456 = 'component_6456';
export function Component6456({ value = 6456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6456, 'data-value': derived.doubled }, children);
}
export default Component6456;
