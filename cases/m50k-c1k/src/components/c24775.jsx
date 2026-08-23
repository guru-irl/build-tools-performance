import React from 'react';
const LABEL_24775 = 'component_24775';
export function Component24775({ value = 24775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24775, 'data-value': derived.doubled }, children);
}
export default Component24775;
