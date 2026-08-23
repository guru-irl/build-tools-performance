import React from 'react';
const LABEL_4970 = 'component_4970';
export function Component4970({ value = 4970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4970, 'data-value': derived.doubled }, children);
}
export default Component4970;
