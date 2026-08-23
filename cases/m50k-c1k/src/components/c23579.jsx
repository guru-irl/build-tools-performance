import React from 'react';
const LABEL_23579 = 'component_23579';
export function Component23579({ value = 23579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23579, 'data-value': derived.doubled }, children);
}
export default Component23579;
