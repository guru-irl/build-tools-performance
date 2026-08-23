import React from 'react';
const LABEL_29457 = 'component_29457';
export function Component29457({ value = 29457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29457, 'data-value': derived.doubled }, children);
}
export default Component29457;
