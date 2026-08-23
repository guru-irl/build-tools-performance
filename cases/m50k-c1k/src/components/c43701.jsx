import React from 'react';
const LABEL_43701 = 'component_43701';
export function Component43701({ value = 43701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43701, 'data-value': derived.doubled }, children);
}
export default Component43701;
