import React from 'react';
const LABEL_29020 = 'component_29020';
export function Component29020({ value = 29020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29020, 'data-value': derived.doubled }, children);
}
export default Component29020;
