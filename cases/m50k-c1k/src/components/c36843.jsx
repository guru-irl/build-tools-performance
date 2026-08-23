import React from 'react';
const LABEL_36843 = 'component_36843';
export function Component36843({ value = 36843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36843, 'data-value': derived.doubled }, children);
}
export default Component36843;
