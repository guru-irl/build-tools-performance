import React from 'react';
const LABEL_36856 = 'component_36856';
export function Component36856({ value = 36856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36856, 'data-value': derived.doubled }, children);
}
export default Component36856;
