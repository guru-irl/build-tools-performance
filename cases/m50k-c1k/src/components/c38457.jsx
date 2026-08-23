import React from 'react';
const LABEL_38457 = 'component_38457';
export function Component38457({ value = 38457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38457, 'data-value': derived.doubled }, children);
}
export default Component38457;
