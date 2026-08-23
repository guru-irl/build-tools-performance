import React from 'react';
const LABEL_22824 = 'component_22824';
export function Component22824({ value = 22824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22824, 'data-value': derived.doubled }, children);
}
export default Component22824;
