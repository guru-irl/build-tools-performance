import React from 'react';
const LABEL_13579 = 'component_13579';
export function Component13579({ value = 13579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13579, 'data-value': derived.doubled }, children);
}
export default Component13579;
