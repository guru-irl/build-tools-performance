import React from 'react';
const LABEL_28910 = 'component_28910';
export function Component28910({ value = 28910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28910, 'data-value': derived.doubled }, children);
}
export default Component28910;
