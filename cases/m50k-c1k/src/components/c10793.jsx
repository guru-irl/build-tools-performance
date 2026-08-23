import React from 'react';
const LABEL_10793 = 'component_10793';
export function Component10793({ value = 10793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10793, 'data-value': derived.doubled }, children);
}
export default Component10793;
