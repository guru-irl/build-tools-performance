import React from 'react';
const LABEL_18457 = 'component_18457';
export function Component18457({ value = 18457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18457, 'data-value': derived.doubled }, children);
}
export default Component18457;
