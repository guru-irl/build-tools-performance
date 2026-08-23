import React from 'react';
const LABEL_15217 = 'component_15217';
export function Component15217({ value = 15217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15217, 'data-value': derived.doubled }, children);
}
export default Component15217;
