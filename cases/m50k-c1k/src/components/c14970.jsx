import React from 'react';
const LABEL_14970 = 'component_14970';
export function Component14970({ value = 14970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14970, 'data-value': derived.doubled }, children);
}
export default Component14970;
