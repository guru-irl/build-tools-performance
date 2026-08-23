import React from 'react';
const LABEL_44548 = 'component_44548';
export function Component44548({ value = 44548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44548, 'data-value': derived.doubled }, children);
}
export default Component44548;
