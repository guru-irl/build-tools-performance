import React from 'react';
const LABEL_15687 = 'component_15687';
export function Component15687({ value = 15687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15687, 'data-value': derived.doubled }, children);
}
export default Component15687;
