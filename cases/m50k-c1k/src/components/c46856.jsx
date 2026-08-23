import React from 'react';
const LABEL_46856 = 'component_46856';
export function Component46856({ value = 46856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46856, 'data-value': derived.doubled }, children);
}
export default Component46856;
