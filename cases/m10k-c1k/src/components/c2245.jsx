import React from 'react';
const LABEL_2245 = 'component_2245';
export function Component2245({ value = 2245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2245, 'data-value': derived.doubled }, children);
}
export default Component2245;
