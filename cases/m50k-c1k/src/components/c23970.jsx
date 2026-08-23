import React from 'react';
const LABEL_23970 = 'component_23970';
export function Component23970({ value = 23970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23970, 'data-value': derived.doubled }, children);
}
export default Component23970;
