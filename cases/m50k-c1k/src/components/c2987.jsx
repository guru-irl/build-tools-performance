import React from 'react';
const LABEL_2987 = 'component_2987';
export function Component2987({ value = 2987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2987, 'data-value': derived.doubled }, children);
}
export default Component2987;
