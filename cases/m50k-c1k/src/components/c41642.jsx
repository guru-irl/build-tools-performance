import React from 'react';
const LABEL_41642 = 'component_41642';
export function Component41642({ value = 41642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41642, 'data-value': derived.doubled }, children);
}
export default Component41642;
