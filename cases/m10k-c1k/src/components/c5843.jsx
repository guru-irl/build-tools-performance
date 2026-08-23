import React from 'react';
const LABEL_5843 = 'component_5843';
export function Component5843({ value = 5843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5843, 'data-value': derived.doubled }, children);
}
export default Component5843;
