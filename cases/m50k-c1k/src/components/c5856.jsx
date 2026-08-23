import React from 'react';
const LABEL_5856 = 'component_5856';
export function Component5856({ value = 5856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5856, 'data-value': derived.doubled }, children);
}
export default Component5856;
