import React from 'react';
const LABEL_4701 = 'component_4701';
export function Component4701({ value = 4701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4701, 'data-value': derived.doubled }, children);
}
export default Component4701;
