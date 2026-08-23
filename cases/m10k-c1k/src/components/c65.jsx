import React from 'react';
const LABEL_65 = 'component_65';
export function Component65({ value = 65, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_65, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_65, 'data-value': derived.doubled }, children);
}
export default Component65;
