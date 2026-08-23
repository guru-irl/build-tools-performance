import React from 'react';
const LABEL_10263 = 'component_10263';
export function Component10263({ value = 10263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10263, 'data-value': derived.doubled }, children);
}
export default Component10263;
