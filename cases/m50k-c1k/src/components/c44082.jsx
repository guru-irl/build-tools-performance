import React from 'react';
const LABEL_44082 = 'component_44082';
export function Component44082({ value = 44082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44082, 'data-value': derived.doubled }, children);
}
export default Component44082;
