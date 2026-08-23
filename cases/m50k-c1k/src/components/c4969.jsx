import React from 'react';
const LABEL_4969 = 'component_4969';
export function Component4969({ value = 4969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4969, 'data-value': derived.doubled }, children);
}
export default Component4969;
