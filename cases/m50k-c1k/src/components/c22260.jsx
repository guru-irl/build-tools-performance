import React from 'react';
const LABEL_22260 = 'component_22260';
export function Component22260({ value = 22260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22260, 'data-value': derived.doubled }, children);
}
export default Component22260;
