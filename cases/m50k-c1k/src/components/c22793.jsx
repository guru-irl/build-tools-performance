import React from 'react';
const LABEL_22793 = 'component_22793';
export function Component22793({ value = 22793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22793, 'data-value': derived.doubled }, children);
}
export default Component22793;
