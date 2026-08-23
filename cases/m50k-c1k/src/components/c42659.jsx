import React from 'react';
const LABEL_42659 = 'component_42659';
export function Component42659({ value = 42659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42659, 'data-value': derived.doubled }, children);
}
export default Component42659;
