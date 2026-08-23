import React from 'react';
const LABEL_40396 = 'component_40396';
export function Component40396({ value = 40396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40396, 'data-value': derived.doubled }, children);
}
export default Component40396;
