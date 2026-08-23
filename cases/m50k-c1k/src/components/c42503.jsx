import React from 'react';
const LABEL_42503 = 'component_42503';
export function Component42503({ value = 42503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42503, 'data-value': derived.doubled }, children);
}
export default Component42503;
