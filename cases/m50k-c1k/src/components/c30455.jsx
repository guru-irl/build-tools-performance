import React from 'react';
const LABEL_30455 = 'component_30455';
export function Component30455({ value = 30455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30455, 'data-value': derived.doubled }, children);
}
export default Component30455;
