import React from 'react';
const LABEL_4636 = 'component_4636';
export function Component4636({ value = 4636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4636, 'data-value': derived.doubled }, children);
}
export default Component4636;
