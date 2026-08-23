import React from 'react';
const LABEL_42862 = 'component_42862';
export function Component42862({ value = 42862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42862, 'data-value': derived.doubled }, children);
}
export default Component42862;
