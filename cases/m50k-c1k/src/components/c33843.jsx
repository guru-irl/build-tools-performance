import React from 'react';
const LABEL_33843 = 'component_33843';
export function Component33843({ value = 33843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33843, 'data-value': derived.doubled }, children);
}
export default Component33843;
