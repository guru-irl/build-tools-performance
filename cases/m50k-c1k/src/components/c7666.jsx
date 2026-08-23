import React from 'react';
const LABEL_7666 = 'component_7666';
export function Component7666({ value = 7666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7666, 'data-value': derived.doubled }, children);
}
export default Component7666;
