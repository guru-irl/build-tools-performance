import React from 'react';
const LABEL_41193 = 'component_41193';
export function Component41193({ value = 41193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41193, 'data-value': derived.doubled }, children);
}
export default Component41193;
