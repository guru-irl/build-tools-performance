import React from 'react';
const LABEL_34480 = 'component_34480';
export function Component34480({ value = 34480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34480, 'data-value': derived.doubled }, children);
}
export default Component34480;
