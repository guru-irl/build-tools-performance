import React from 'react';
const LABEL_2492 = 'component_2492';
export function Component2492({ value = 2492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2492, 'data-value': derived.doubled }, children);
}
export default Component2492;
