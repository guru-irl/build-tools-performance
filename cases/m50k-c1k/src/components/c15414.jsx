import React from 'react';
const LABEL_15414 = 'component_15414';
export function Component15414({ value = 15414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15414, 'data-value': derived.doubled }, children);
}
export default Component15414;
