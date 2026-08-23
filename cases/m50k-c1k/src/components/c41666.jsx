import React from 'react';
const LABEL_41666 = 'component_41666';
export function Component41666({ value = 41666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41666, 'data-value': derived.doubled }, children);
}
export default Component41666;
