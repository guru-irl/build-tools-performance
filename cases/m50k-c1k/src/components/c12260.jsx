import React from 'react';
const LABEL_12260 = 'component_12260';
export function Component12260({ value = 12260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12260, 'data-value': derived.doubled }, children);
}
export default Component12260;
