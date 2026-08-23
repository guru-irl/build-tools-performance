import React from 'react';
const LABEL_12975 = 'component_12975';
export function Component12975({ value = 12975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12975, 'data-value': derived.doubled }, children);
}
export default Component12975;
