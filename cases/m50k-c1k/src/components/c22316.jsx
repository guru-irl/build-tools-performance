import React from 'react';
const LABEL_22316 = 'component_22316';
export function Component22316({ value = 22316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22316, 'data-value': derived.doubled }, children);
}
export default Component22316;
