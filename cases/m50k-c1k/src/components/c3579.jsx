import React from 'react';
const LABEL_3579 = 'component_3579';
export function Component3579({ value = 3579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3579, 'data-value': derived.doubled }, children);
}
export default Component3579;
