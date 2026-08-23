import React from 'react';
const LABEL_8458 = 'component_8458';
export function Component8458({ value = 8458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8458, 'data-value': derived.doubled }, children);
}
export default Component8458;
