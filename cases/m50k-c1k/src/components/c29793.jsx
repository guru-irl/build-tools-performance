import React from 'react';
const LABEL_29793 = 'component_29793';
export function Component29793({ value = 29793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29793, 'data-value': derived.doubled }, children);
}
export default Component29793;
