import React from 'react';
const LABEL_23244 = 'component_23244';
export function Component23244({ value = 23244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23244, 'data-value': derived.doubled }, children);
}
export default Component23244;
