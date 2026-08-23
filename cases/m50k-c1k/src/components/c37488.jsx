import React from 'react';
const LABEL_37488 = 'component_37488';
export function Component37488({ value = 37488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37488, 'data-value': derived.doubled }, children);
}
export default Component37488;
