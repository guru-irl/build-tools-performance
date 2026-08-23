import React from 'react';
const LABEL_29297 = 'component_29297';
export function Component29297({ value = 29297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29297, 'data-value': derived.doubled }, children);
}
export default Component29297;
