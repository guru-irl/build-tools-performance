import React from 'react';
const LABEL_26325 = 'component_26325';
export function Component26325({ value = 26325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26325, 'data-value': derived.doubled }, children);
}
export default Component26325;
