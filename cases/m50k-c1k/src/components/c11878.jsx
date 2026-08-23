import React from 'react';
const LABEL_11878 = 'component_11878';
export function Component11878({ value = 11878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11878, 'data-value': derived.doubled }, children);
}
export default Component11878;
