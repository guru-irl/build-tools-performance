import React from 'react';
const LABEL_15035 = 'component_15035';
export function Component15035({ value = 15035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15035, 'data-value': derived.doubled }, children);
}
export default Component15035;
