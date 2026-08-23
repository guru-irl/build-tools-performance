import React from 'react';
const LABEL_15527 = 'component_15527';
export function Component15527({ value = 15527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15527, 'data-value': derived.doubled }, children);
}
export default Component15527;
