import React from 'react';
const LABEL_15245 = 'component_15245';
export function Component15245({ value = 15245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15245, 'data-value': derived.doubled }, children);
}
export default Component15245;
