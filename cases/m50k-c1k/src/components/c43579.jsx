import React from 'react';
const LABEL_43579 = 'component_43579';
export function Component43579({ value = 43579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43579, 'data-value': derived.doubled }, children);
}
export default Component43579;
