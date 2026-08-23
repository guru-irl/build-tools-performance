import React from 'react';
const LABEL_44793 = 'component_44793';
export function Component44793({ value = 44793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44793, 'data-value': derived.doubled }, children);
}
export default Component44793;
