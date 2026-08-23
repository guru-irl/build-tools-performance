import React from 'react';
const LABEL_43878 = 'component_43878';
export function Component43878({ value = 43878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43878, 'data-value': derived.doubled }, children);
}
export default Component43878;
