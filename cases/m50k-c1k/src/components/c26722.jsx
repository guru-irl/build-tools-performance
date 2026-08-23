import React from 'react';
const LABEL_26722 = 'component_26722';
export function Component26722({ value = 26722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26722, 'data-value': derived.doubled }, children);
}
export default Component26722;
