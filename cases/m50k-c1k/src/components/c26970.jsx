import React from 'react';
const LABEL_26970 = 'component_26970';
export function Component26970({ value = 26970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26970, 'data-value': derived.doubled }, children);
}
export default Component26970;
