import React from 'react';
const LABEL_38793 = 'component_38793';
export function Component38793({ value = 38793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38793, 'data-value': derived.doubled }, children);
}
export default Component38793;
