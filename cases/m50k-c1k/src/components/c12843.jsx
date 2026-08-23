import React from 'react';
const LABEL_12843 = 'component_12843';
export function Component12843({ value = 12843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12843, 'data-value': derived.doubled }, children);
}
export default Component12843;
