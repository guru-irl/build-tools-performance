import React from 'react';
const LABEL_19245 = 'component_19245';
export function Component19245({ value = 19245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19245, 'data-value': derived.doubled }, children);
}
export default Component19245;
