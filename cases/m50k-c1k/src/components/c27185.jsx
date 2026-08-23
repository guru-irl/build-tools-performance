import React from 'react';
const LABEL_27185 = 'component_27185';
export function Component27185({ value = 27185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27185, 'data-value': derived.doubled }, children);
}
export default Component27185;
