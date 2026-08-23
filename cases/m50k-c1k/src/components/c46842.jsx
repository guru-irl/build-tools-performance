import React from 'react';
const LABEL_46842 = 'component_46842';
export function Component46842({ value = 46842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46842, 'data-value': derived.doubled }, children);
}
export default Component46842;
