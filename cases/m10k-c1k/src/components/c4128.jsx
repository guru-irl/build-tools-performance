import React from 'react';
const LABEL_4128 = 'component_4128';
export function Component4128({ value = 4128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4128, 'data-value': derived.doubled }, children);
}
export default Component4128;
