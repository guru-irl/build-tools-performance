import React from 'react';
const LABEL_29579 = 'component_29579';
export function Component29579({ value = 29579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29579, 'data-value': derived.doubled }, children);
}
export default Component29579;
