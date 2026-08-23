import React from 'react';
const LABEL_19639 = 'component_19639';
export function Component19639({ value = 19639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19639, 'data-value': derived.doubled }, children);
}
export default Component19639;
