import React from 'react';
const LABEL_25842 = 'component_25842';
export function Component25842({ value = 25842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25842, 'data-value': derived.doubled }, children);
}
export default Component25842;
