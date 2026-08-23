import React from 'react';
const LABEL_31457 = 'component_31457';
export function Component31457({ value = 31457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31457, 'data-value': derived.doubled }, children);
}
export default Component31457;
