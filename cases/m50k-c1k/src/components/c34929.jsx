import React from 'react';
const LABEL_34929 = 'component_34929';
export function Component34929({ value = 34929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34929, 'data-value': derived.doubled }, children);
}
export default Component34929;
