import React from 'react';
const LABEL_579 = 'component_579';
export function Component579({ value = 579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_579, 'data-value': derived.doubled }, children);
}
export default Component579;
