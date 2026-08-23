import React from 'react';
const LABEL_659 = 'component_659';
export function Component659({ value = 659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_659, 'data-value': derived.doubled }, children);
}
export default Component659;
