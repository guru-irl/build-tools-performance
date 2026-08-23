import React from 'react';
const LABEL_34892 = 'component_34892';
export function Component34892({ value = 34892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34892, 'data-value': derived.doubled }, children);
}
export default Component34892;
