import React from 'react';
const LABEL_19457 = 'component_19457';
export function Component19457({ value = 19457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19457, 'data-value': derived.doubled }, children);
}
export default Component19457;
