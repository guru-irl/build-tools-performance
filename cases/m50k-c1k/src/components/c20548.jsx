import React from 'react';
const LABEL_20548 = 'component_20548';
export function Component20548({ value = 20548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20548, 'data-value': derived.doubled }, children);
}
export default Component20548;
