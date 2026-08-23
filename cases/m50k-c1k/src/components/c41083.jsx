import React from 'react';
const LABEL_41083 = 'component_41083';
export function Component41083({ value = 41083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41083, 'data-value': derived.doubled }, children);
}
export default Component41083;
