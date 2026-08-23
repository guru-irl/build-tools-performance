import React from 'react';
const LABEL_21970 = 'component_21970';
export function Component21970({ value = 21970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21970, 'data-value': derived.doubled }, children);
}
export default Component21970;
