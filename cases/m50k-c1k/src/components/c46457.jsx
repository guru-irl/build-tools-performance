import React from 'react';
const LABEL_46457 = 'component_46457';
export function Component46457({ value = 46457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46457, 'data-value': derived.doubled }, children);
}
export default Component46457;
