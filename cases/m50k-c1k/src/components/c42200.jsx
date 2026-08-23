import React from 'react';
const LABEL_42200 = 'component_42200';
export function Component42200({ value = 42200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42200, 'data-value': derived.doubled }, children);
}
export default Component42200;
