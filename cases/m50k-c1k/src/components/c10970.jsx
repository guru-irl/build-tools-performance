import React from 'react';
const LABEL_10970 = 'component_10970';
export function Component10970({ value = 10970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10970, 'data-value': derived.doubled }, children);
}
export default Component10970;
