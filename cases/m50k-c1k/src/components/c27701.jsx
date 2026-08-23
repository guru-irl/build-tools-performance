import React from 'react';
const LABEL_27701 = 'component_27701';
export function Component27701({ value = 27701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27701, 'data-value': derived.doubled }, children);
}
export default Component27701;
