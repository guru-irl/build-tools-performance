import React from 'react';
const LABEL_22301 = 'component_22301';
export function Component22301({ value = 22301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22301, 'data-value': derived.doubled }, children);
}
export default Component22301;
