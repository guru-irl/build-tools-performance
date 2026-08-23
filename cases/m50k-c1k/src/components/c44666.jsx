import React from 'react';
const LABEL_44666 = 'component_44666';
export function Component44666({ value = 44666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44666, 'data-value': derived.doubled }, children);
}
export default Component44666;
