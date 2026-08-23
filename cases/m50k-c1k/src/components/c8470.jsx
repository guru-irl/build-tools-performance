import React from 'react';
const LABEL_8470 = 'component_8470';
export function Component8470({ value = 8470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8470, 'data-value': derived.doubled }, children);
}
export default Component8470;
