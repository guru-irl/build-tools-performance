import React from 'react';
const LABEL_10260 = 'component_10260';
export function Component10260({ value = 10260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10260, 'data-value': derived.doubled }, children);
}
export default Component10260;
