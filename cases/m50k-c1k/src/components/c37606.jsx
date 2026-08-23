import React from 'react';
const LABEL_37606 = 'component_37606';
export function Component37606({ value = 37606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37606, 'data-value': derived.doubled }, children);
}
export default Component37606;
