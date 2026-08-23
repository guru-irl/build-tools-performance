import React from 'react';
const LABEL_24881 = 'component_24881';
export function Component24881({ value = 24881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24881, 'data-value': derived.doubled }, children);
}
export default Component24881;
