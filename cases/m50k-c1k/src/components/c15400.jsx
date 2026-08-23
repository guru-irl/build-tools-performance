import React from 'react';
const LABEL_15400 = 'component_15400';
export function Component15400({ value = 15400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15400, 'data-value': derived.doubled }, children);
}
export default Component15400;
