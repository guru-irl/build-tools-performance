import React from 'react';
const LABEL_35775 = 'component_35775';
export function Component35775({ value = 35775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35775, 'data-value': derived.doubled }, children);
}
export default Component35775;
