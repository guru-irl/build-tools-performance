import React from 'react';
const LABEL_5515 = 'component_5515';
export function Component5515({ value = 5515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5515, 'data-value': derived.doubled }, children);
}
export default Component5515;
