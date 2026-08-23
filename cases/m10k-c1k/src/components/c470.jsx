import React from 'react';
const LABEL_470 = 'component_470';
export function Component470({ value = 470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_470, 'data-value': derived.doubled }, children);
}
export default Component470;
