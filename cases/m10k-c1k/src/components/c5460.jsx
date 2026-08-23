import React from 'react';
const LABEL_5460 = 'component_5460';
export function Component5460({ value = 5460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5460, 'data-value': derived.doubled }, children);
}
export default Component5460;
