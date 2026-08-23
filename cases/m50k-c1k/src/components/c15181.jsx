import React from 'react';
const LABEL_15181 = 'component_15181';
export function Component15181({ value = 15181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15181, 'data-value': derived.doubled }, children);
}
export default Component15181;
