import React from 'react';
const LABEL_24579 = 'component_24579';
export function Component24579({ value = 24579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24579, 'data-value': derived.doubled }, children);
}
export default Component24579;
