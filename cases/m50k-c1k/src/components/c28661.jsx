import React from 'react';
const LABEL_28661 = 'component_28661';
export function Component28661({ value = 28661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28661, 'data-value': derived.doubled }, children);
}
export default Component28661;
