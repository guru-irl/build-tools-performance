import React from 'react';
const LABEL_30423 = 'component_30423';
export function Component30423({ value = 30423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30423, 'data-value': derived.doubled }, children);
}
export default Component30423;
