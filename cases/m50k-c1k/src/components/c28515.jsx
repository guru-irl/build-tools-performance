import React from 'react';
const LABEL_28515 = 'component_28515';
export function Component28515({ value = 28515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28515, 'data-value': derived.doubled }, children);
}
export default Component28515;
