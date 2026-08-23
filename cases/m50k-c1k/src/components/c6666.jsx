import React from 'react';
const LABEL_6666 = 'component_6666';
export function Component6666({ value = 6666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6666, 'data-value': derived.doubled }, children);
}
export default Component6666;
