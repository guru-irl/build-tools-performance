import React from 'react';
const LABEL_8701 = 'component_8701';
export function Component8701({ value = 8701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8701, 'data-value': derived.doubled }, children);
}
export default Component8701;
