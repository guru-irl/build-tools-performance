import React from 'react';
const LABEL_28415 = 'component_28415';
export function Component28415({ value = 28415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28415, 'data-value': derived.doubled }, children);
}
export default Component28415;
