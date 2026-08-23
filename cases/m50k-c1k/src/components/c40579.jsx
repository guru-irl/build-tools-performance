import React from 'react';
const LABEL_40579 = 'component_40579';
export function Component40579({ value = 40579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40579, 'data-value': derived.doubled }, children);
}
export default Component40579;
