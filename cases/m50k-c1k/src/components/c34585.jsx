import React from 'react';
const LABEL_34585 = 'component_34585';
export function Component34585({ value = 34585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34585, 'data-value': derived.doubled }, children);
}
export default Component34585;
