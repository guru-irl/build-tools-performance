import React from 'react';
const LABEL_32327 = 'component_32327';
export function Component32327({ value = 32327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32327, 'data-value': derived.doubled }, children);
}
export default Component32327;
