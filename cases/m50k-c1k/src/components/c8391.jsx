import React from 'react';
const LABEL_8391 = 'component_8391';
export function Component8391({ value = 8391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8391, 'data-value': derived.doubled }, children);
}
export default Component8391;
