import React from 'react';
const LABEL_34081 = 'component_34081';
export function Component34081({ value = 34081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34081, 'data-value': derived.doubled }, children);
}
export default Component34081;
