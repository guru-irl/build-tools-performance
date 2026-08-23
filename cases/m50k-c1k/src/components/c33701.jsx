import React from 'react';
const LABEL_33701 = 'component_33701';
export function Component33701({ value = 33701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33701, 'data-value': derived.doubled }, children);
}
export default Component33701;
