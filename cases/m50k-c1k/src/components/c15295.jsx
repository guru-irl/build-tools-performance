import React from 'react';
const LABEL_15295 = 'component_15295';
export function Component15295({ value = 15295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15295, 'data-value': derived.doubled }, children);
}
export default Component15295;
