import React from 'react';
const LABEL_4793 = 'component_4793';
export function Component4793({ value = 4793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4793, 'data-value': derived.doubled }, children);
}
export default Component4793;
