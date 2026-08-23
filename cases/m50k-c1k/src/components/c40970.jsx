import React from 'react';
const LABEL_40970 = 'component_40970';
export function Component40970({ value = 40970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40970, 'data-value': derived.doubled }, children);
}
export default Component40970;
