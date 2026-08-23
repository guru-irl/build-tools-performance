import React from 'react';
const LABEL_34548 = 'component_34548';
export function Component34548({ value = 34548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34548, 'data-value': derived.doubled }, children);
}
export default Component34548;
