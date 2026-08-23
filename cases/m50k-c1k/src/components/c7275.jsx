import React from 'react';
const LABEL_7275 = 'component_7275';
export function Component7275({ value = 7275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7275, 'data-value': derived.doubled }, children);
}
export default Component7275;
