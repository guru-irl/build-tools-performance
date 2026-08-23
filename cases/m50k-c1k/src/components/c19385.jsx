import React from 'react';
const LABEL_19385 = 'component_19385';
export function Component19385({ value = 19385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19385, 'data-value': derived.doubled }, children);
}
export default Component19385;
