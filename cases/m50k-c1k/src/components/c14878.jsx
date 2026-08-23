import React from 'react';
const LABEL_14878 = 'component_14878';
export function Component14878({ value = 14878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14878, 'data-value': derived.doubled }, children);
}
export default Component14878;
