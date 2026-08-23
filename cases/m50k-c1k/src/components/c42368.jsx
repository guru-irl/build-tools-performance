import React from 'react';
const LABEL_42368 = 'component_42368';
export function Component42368({ value = 42368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42368, 'data-value': derived.doubled }, children);
}
export default Component42368;
