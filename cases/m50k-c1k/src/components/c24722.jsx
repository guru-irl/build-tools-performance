import React from 'react';
const LABEL_24722 = 'component_24722';
export function Component24722({ value = 24722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24722, 'data-value': derived.doubled }, children);
}
export default Component24722;
