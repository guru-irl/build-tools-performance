import React from 'react';
const LABEL_6775 = 'component_6775';
export function Component6775({ value = 6775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6775, 'data-value': derived.doubled }, children);
}
export default Component6775;
