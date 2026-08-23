import React from 'react';
const LABEL_8878 = 'component_8878';
export function Component8878({ value = 8878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8878, 'data-value': derived.doubled }, children);
}
export default Component8878;
