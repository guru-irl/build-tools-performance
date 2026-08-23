import React from 'react';
const LABEL_16457 = 'component_16457';
export function Component16457({ value = 16457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16457, 'data-value': derived.doubled }, children);
}
export default Component16457;
