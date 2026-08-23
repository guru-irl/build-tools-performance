import React from 'react';
const LABEL_25881 = 'component_25881';
export function Component25881({ value = 25881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25881, 'data-value': derived.doubled }, children);
}
export default Component25881;
