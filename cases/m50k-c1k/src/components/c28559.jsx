import React from 'react';
const LABEL_28559 = 'component_28559';
export function Component28559({ value = 28559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28559, 'data-value': derived.doubled }, children);
}
export default Component28559;
