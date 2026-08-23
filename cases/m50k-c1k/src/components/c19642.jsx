import React from 'react';
const LABEL_19642 = 'component_19642';
export function Component19642({ value = 19642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19642, 'data-value': derived.doubled }, children);
}
export default Component19642;
