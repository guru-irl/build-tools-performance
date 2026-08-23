import React from 'react';
const LABEL_41 = 'component_41';
export function Component41({ value = 41, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41, 'data-value': derived.doubled }, children);
}
export default Component41;
