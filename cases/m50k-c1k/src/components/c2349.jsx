import React from 'react';
const LABEL_2349 = 'component_2349';
export function Component2349({ value = 2349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2349, 'data-value': derived.doubled }, children);
}
export default Component2349;
