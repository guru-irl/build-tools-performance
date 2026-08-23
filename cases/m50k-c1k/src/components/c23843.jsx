import React from 'react';
const LABEL_23843 = 'component_23843';
export function Component23843({ value = 23843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23843, 'data-value': derived.doubled }, children);
}
export default Component23843;
