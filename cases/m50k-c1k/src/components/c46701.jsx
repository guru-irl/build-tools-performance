import React from 'react';
const LABEL_46701 = 'component_46701';
export function Component46701({ value = 46701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46701, 'data-value': derived.doubled }, children);
}
export default Component46701;
