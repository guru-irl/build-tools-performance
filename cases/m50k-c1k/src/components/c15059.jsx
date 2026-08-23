import React from 'react';
const LABEL_15059 = 'component_15059';
export function Component15059({ value = 15059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15059, 'data-value': derived.doubled }, children);
}
export default Component15059;
