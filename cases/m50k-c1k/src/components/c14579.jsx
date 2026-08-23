import React from 'react';
const LABEL_14579 = 'component_14579';
export function Component14579({ value = 14579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14579, 'data-value': derived.doubled }, children);
}
export default Component14579;
