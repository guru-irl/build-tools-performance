import React from 'react';
const LABEL_405 = 'component_405';
export function Component405({ value = 405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_405, 'data-value': derived.doubled }, children);
}
export default Component405;
