import React from 'react';
const LABEL_15564 = 'component_15564';
export function Component15564({ value = 15564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15564, 'data-value': derived.doubled }, children);
}
export default Component15564;
