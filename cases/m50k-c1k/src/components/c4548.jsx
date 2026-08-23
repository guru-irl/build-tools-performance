import React from 'react';
const LABEL_4548 = 'component_4548';
export function Component4548({ value = 4548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4548, 'data-value': derived.doubled }, children);
}
export default Component4548;
