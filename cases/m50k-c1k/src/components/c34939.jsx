import React from 'react';
const LABEL_34939 = 'component_34939';
export function Component34939({ value = 34939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34939, 'data-value': derived.doubled }, children);
}
export default Component34939;
