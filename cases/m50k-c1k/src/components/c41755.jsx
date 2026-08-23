import React from 'react';
const LABEL_41755 = 'component_41755';
export function Component41755({ value = 41755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41755, 'data-value': derived.doubled }, children);
}
export default Component41755;
