import React from 'react';
const LABEL_29775 = 'component_29775';
export function Component29775({ value = 29775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29775, 'data-value': derived.doubled }, children);
}
export default Component29775;
