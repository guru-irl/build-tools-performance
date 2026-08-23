import React from 'react';
const LABEL_37642 = 'component_37642';
export function Component37642({ value = 37642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37642, 'data-value': derived.doubled }, children);
}
export default Component37642;
