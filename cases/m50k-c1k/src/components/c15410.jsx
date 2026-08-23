import React from 'react';
const LABEL_15410 = 'component_15410';
export function Component15410({ value = 15410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15410, 'data-value': derived.doubled }, children);
}
export default Component15410;
