import React from 'react';
const LABEL_43665 = 'component_43665';
export function Component43665({ value = 43665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43665, 'data-value': derived.doubled }, children);
}
export default Component43665;
