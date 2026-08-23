import React from 'react';
const LABEL_35359 = 'component_35359';
export function Component35359({ value = 35359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35359, 'data-value': derived.doubled }, children);
}
export default Component35359;
