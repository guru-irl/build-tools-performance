import React from 'react';
const LABEL_35457 = 'component_35457';
export function Component35457({ value = 35457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35457, 'data-value': derived.doubled }, children);
}
export default Component35457;
