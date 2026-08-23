import React from 'react';
const LABEL_18548 = 'component_18548';
export function Component18548({ value = 18548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18548, 'data-value': derived.doubled }, children);
}
export default Component18548;
