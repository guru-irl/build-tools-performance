import React from 'react';
const LABEL_15974 = 'component_15974';
export function Component15974({ value = 15974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15974, 'data-value': derived.doubled }, children);
}
export default Component15974;
