import React from 'react';
const LABEL_35793 = 'component_35793';
export function Component35793({ value = 35793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35793, 'data-value': derived.doubled }, children);
}
export default Component35793;
