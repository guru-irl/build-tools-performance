import React from 'react';
const LABEL_46878 = 'component_46878';
export function Component46878({ value = 46878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46878, 'data-value': derived.doubled }, children);
}
export default Component46878;
