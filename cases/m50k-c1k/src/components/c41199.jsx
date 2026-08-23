import React from 'react';
const LABEL_41199 = 'component_41199';
export function Component41199({ value = 41199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41199, 'data-value': derived.doubled }, children);
}
export default Component41199;
