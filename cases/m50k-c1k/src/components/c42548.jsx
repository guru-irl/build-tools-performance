import React from 'react';
const LABEL_42548 = 'component_42548';
export function Component42548({ value = 42548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42548, 'data-value': derived.doubled }, children);
}
export default Component42548;
