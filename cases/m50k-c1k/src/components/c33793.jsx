import React from 'react';
const LABEL_33793 = 'component_33793';
export function Component33793({ value = 33793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33793, 'data-value': derived.doubled }, children);
}
export default Component33793;
