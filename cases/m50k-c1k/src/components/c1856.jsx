import React from 'react';
const LABEL_1856 = 'component_1856';
export function Component1856({ value = 1856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1856, 'data-value': derived.doubled }, children);
}
export default Component1856;
