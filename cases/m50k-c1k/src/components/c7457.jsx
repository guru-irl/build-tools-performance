import React from 'react';
const LABEL_7457 = 'component_7457';
export function Component7457({ value = 7457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7457, 'data-value': derived.doubled }, children);
}
export default Component7457;
