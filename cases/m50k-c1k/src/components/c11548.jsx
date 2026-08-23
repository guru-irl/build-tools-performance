import React from 'react';
const LABEL_11548 = 'component_11548';
export function Component11548({ value = 11548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11548, 'data-value': derived.doubled }, children);
}
export default Component11548;
