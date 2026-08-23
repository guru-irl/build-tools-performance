import React from 'react';
const LABEL_28970 = 'component_28970';
export function Component28970({ value = 28970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28970, 'data-value': derived.doubled }, children);
}
export default Component28970;
