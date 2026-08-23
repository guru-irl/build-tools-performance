import React from 'react';
const LABEL_7158 = 'component_7158';
export function Component7158({ value = 7158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7158, 'data-value': derived.doubled }, children);
}
export default Component7158;
