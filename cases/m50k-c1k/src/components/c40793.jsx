import React from 'react';
const LABEL_40793 = 'component_40793';
export function Component40793({ value = 40793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40793, 'data-value': derived.doubled }, children);
}
export default Component40793;
