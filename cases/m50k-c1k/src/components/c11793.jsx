import React from 'react';
const LABEL_11793 = 'component_11793';
export function Component11793({ value = 11793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11793, 'data-value': derived.doubled }, children);
}
export default Component11793;
