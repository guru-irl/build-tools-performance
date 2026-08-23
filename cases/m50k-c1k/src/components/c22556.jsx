import React from 'react';
const LABEL_22556 = 'component_22556';
export function Component22556({ value = 22556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22556, 'data-value': derived.doubled }, children);
}
export default Component22556;
