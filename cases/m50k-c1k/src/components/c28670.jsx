import React from 'react';
const LABEL_28670 = 'component_28670';
export function Component28670({ value = 28670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28670, 'data-value': derived.doubled }, children);
}
export default Component28670;
