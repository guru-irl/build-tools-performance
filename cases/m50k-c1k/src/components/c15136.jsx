import React from 'react';
const LABEL_15136 = 'component_15136';
export function Component15136({ value = 15136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15136, 'data-value': derived.doubled }, children);
}
export default Component15136;
