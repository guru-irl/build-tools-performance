import React from 'react';
const LABEL_13793 = 'component_13793';
export function Component13793({ value = 13793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13793, 'data-value': derived.doubled }, children);
}
export default Component13793;
