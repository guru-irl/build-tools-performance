import React from 'react';
const LABEL_36457 = 'component_36457';
export function Component36457({ value = 36457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36457, 'data-value': derived.doubled }, children);
}
export default Component36457;
