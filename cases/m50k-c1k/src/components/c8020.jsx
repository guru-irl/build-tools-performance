import React from 'react';
const LABEL_8020 = 'component_8020';
export function Component8020({ value = 8020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8020, 'data-value': derived.doubled }, children);
}
export default Component8020;
