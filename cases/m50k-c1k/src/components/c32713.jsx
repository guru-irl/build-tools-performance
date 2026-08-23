import React from 'react';
const LABEL_32713 = 'component_32713';
export function Component32713({ value = 32713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32713, 'data-value': derived.doubled }, children);
}
export default Component32713;
