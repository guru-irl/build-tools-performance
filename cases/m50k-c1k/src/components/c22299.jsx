import React from 'react';
const LABEL_22299 = 'component_22299';
export function Component22299({ value = 22299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22299, 'data-value': derived.doubled }, children);
}
export default Component22299;
