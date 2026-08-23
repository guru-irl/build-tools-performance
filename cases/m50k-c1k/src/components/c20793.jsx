import React from 'react';
const LABEL_20793 = 'component_20793';
export function Component20793({ value = 20793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20793, 'data-value': derived.doubled }, children);
}
export default Component20793;
