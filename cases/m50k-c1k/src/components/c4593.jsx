import React from 'react';
const LABEL_4593 = 'component_4593';
export function Component4593({ value = 4593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4593, 'data-value': derived.doubled }, children);
}
export default Component4593;
