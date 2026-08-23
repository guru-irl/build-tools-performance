import React from 'react';
const LABEL_34856 = 'component_34856';
export function Component34856({ value = 34856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34856, 'data-value': derived.doubled }, children);
}
export default Component34856;
