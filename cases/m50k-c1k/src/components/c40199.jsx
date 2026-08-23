import React from 'react';
const LABEL_40199 = 'component_40199';
export function Component40199({ value = 40199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40199, 'data-value': derived.doubled }, children);
}
export default Component40199;
