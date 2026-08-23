import React from 'react';
const LABEL_8579 = 'component_8579';
export function Component8579({ value = 8579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8579, 'data-value': derived.doubled }, children);
}
export default Component8579;
