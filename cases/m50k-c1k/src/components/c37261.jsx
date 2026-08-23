import React from 'react';
const LABEL_37261 = 'component_37261';
export function Component37261({ value = 37261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37261, 'data-value': derived.doubled }, children);
}
export default Component37261;
