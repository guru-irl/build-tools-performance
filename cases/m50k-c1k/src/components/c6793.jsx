import React from 'react';
const LABEL_6793 = 'component_6793';
export function Component6793({ value = 6793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6793, 'data-value': derived.doubled }, children);
}
export default Component6793;
