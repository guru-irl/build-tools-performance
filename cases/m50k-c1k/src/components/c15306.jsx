import React from 'react';
const LABEL_15306 = 'component_15306';
export function Component15306({ value = 15306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15306, 'data-value': derived.doubled }, children);
}
export default Component15306;
