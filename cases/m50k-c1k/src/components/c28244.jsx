import React from 'react';
const LABEL_28244 = 'component_28244';
export function Component28244({ value = 28244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28244, 'data-value': derived.doubled }, children);
}
export default Component28244;
