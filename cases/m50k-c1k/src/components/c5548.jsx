import React from 'react';
const LABEL_5548 = 'component_5548';
export function Component5548({ value = 5548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5548, 'data-value': derived.doubled }, children);
}
export default Component5548;
