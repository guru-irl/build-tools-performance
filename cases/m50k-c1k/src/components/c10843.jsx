import React from 'react';
const LABEL_10843 = 'component_10843';
export function Component10843({ value = 10843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10843, 'data-value': derived.doubled }, children);
}
export default Component10843;
