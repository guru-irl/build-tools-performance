import React from 'react';
const LABEL_2793 = 'component_2793';
export function Component2793({ value = 2793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2793, 'data-value': derived.doubled }, children);
}
export default Component2793;
