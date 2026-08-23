import React from 'react';
const LABEL_40943 = 'component_40943';
export function Component40943({ value = 40943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40943, 'data-value': derived.doubled }, children);
}
export default Component40943;
