import React from 'react';
const LABEL_45970 = 'component_45970';
export function Component45970({ value = 45970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45970, 'data-value': derived.doubled }, children);
}
export default Component45970;
