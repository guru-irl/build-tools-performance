import React from 'react';
const LABEL_33302 = 'component_33302';
export function Component33302({ value = 33302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33302, 'data-value': derived.doubled }, children);
}
export default Component33302;
