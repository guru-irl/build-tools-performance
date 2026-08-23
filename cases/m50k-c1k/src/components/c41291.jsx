import React from 'react';
const LABEL_41291 = 'component_41291';
export function Component41291({ value = 41291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41291, 'data-value': derived.doubled }, children);
}
export default Component41291;
