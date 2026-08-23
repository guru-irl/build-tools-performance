import React from 'react';
const LABEL_26856 = 'component_26856';
export function Component26856({ value = 26856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26856, 'data-value': derived.doubled }, children);
}
export default Component26856;
