import React from 'react';
const LABEL_5457 = 'component_5457';
export function Component5457({ value = 5457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5457, 'data-value': derived.doubled }, children);
}
export default Component5457;
