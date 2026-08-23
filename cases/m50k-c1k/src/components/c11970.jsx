import React from 'react';
const LABEL_11970 = 'component_11970';
export function Component11970({ value = 11970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11970, 'data-value': derived.doubled }, children);
}
export default Component11970;
