import React from 'react';
const LABEL_24391 = 'component_24391';
export function Component24391({ value = 24391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24391, 'data-value': derived.doubled }, children);
}
export default Component24391;
