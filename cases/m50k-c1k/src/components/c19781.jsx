import React from 'react';
const LABEL_19781 = 'component_19781';
export function Component19781({ value = 19781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19781, 'data-value': derived.doubled }, children);
}
export default Component19781;
