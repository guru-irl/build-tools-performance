import React from 'react';
const LABEL_22579 = 'component_22579';
export function Component22579({ value = 22579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22579, 'data-value': derived.doubled }, children);
}
export default Component22579;
