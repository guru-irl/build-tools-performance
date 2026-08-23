import React from 'react';
const LABEL_42602 = 'component_42602';
export function Component42602({ value = 42602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42602, 'data-value': derived.doubled }, children);
}
export default Component42602;
