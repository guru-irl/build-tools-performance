import React from 'react';
const LABEL_40213 = 'component_40213';
export function Component40213({ value = 40213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40213, 'data-value': derived.doubled }, children);
}
export default Component40213;
