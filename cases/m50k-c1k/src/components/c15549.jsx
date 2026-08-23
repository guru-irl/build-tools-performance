import React from 'react';
const LABEL_15549 = 'component_15549';
export function Component15549({ value = 15549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15549, 'data-value': derived.doubled }, children);
}
export default Component15549;
