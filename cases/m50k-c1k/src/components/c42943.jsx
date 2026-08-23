import React from 'react';
const LABEL_42943 = 'component_42943';
export function Component42943({ value = 42943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42943, 'data-value': derived.doubled }, children);
}
export default Component42943;
