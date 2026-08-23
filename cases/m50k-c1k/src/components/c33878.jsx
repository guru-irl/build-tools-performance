import React from 'react';
const LABEL_33878 = 'component_33878';
export function Component33878({ value = 33878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33878, 'data-value': derived.doubled }, children);
}
export default Component33878;
