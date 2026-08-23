import React from 'react';
const LABEL_24970 = 'component_24970';
export function Component24970({ value = 24970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24970, 'data-value': derived.doubled }, children);
}
export default Component24970;
