import React from 'react';
const LABEL_6701 = 'component_6701';
export function Component6701({ value = 6701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6701, 'data-value': derived.doubled }, children);
}
export default Component6701;
