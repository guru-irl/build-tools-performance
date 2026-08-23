import React from 'react';
const LABEL_15236 = 'component_15236';
export function Component15236({ value = 15236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15236, 'data-value': derived.doubled }, children);
}
export default Component15236;
