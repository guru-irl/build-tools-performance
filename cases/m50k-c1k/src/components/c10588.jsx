import React from 'react';
const LABEL_10588 = 'component_10588';
export function Component10588({ value = 10588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10588, 'data-value': derived.doubled }, children);
}
export default Component10588;
