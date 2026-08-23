import React from 'react';
const LABEL_2184 = 'component_2184';
export function Component2184({ value = 2184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2184, 'data-value': derived.doubled }, children);
}
export default Component2184;
