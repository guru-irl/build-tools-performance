import React from 'react';
const LABEL_15843 = 'component_15843';
export function Component15843({ value = 15843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15843, 'data-value': derived.doubled }, children);
}
export default Component15843;
