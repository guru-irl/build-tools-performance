import React from 'react';
const LABEL_15463 = 'component_15463';
export function Component15463({ value = 15463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15463, 'data-value': derived.doubled }, children);
}
export default Component15463;
