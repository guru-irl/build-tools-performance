import React from 'react';
const LABEL_40548 = 'component_40548';
export function Component40548({ value = 40548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40548, 'data-value': derived.doubled }, children);
}
export default Component40548;
