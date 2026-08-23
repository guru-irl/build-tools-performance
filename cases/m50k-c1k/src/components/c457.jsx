import React from 'react';
const LABEL_457 = 'component_457';
export function Component457({ value = 457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_457, 'data-value': derived.doubled }, children);
}
export default Component457;
