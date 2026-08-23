import React from 'react';
const LABEL_11642 = 'component_11642';
export function Component11642({ value = 11642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11642, 'data-value': derived.doubled }, children);
}
export default Component11642;
