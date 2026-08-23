import React from 'react';
const LABEL_43391 = 'component_43391';
export function Component43391({ value = 43391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43391, 'data-value': derived.doubled }, children);
}
export default Component43391;
