import React from 'react';
const LABEL_12549 = 'component_12549';
export function Component12549({ value = 12549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12549, 'data-value': derived.doubled }, children);
}
export default Component12549;
