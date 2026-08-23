import React from 'react';
const LABEL_42358 = 'component_42358';
export function Component42358({ value = 42358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42358, 'data-value': derived.doubled }, children);
}
export default Component42358;
