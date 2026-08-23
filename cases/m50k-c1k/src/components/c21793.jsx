import React from 'react';
const LABEL_21793 = 'component_21793';
export function Component21793({ value = 21793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21793, 'data-value': derived.doubled }, children);
}
export default Component21793;
