import React from 'react';
const LABEL_15970 = 'component_15970';
export function Component15970({ value = 15970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15970, 'data-value': derived.doubled }, children);
}
export default Component15970;
