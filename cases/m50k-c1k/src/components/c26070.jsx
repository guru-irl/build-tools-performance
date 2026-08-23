import React from 'react';
const LABEL_26070 = 'component_26070';
export function Component26070({ value = 26070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26070, 'data-value': derived.doubled }, children);
}
export default Component26070;
