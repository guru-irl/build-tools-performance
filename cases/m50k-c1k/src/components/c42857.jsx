import React from 'react';
const LABEL_42857 = 'component_42857';
export function Component42857({ value = 42857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42857, 'data-value': derived.doubled }, children);
}
export default Component42857;
