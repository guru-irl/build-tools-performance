import React from 'react';
const LABEL_41128 = 'component_41128';
export function Component41128({ value = 41128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41128, 'data-value': derived.doubled }, children);
}
export default Component41128;
