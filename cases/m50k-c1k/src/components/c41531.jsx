import React from 'react';
const LABEL_41531 = 'component_41531';
export function Component41531({ value = 41531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41531, 'data-value': derived.doubled }, children);
}
export default Component41531;
