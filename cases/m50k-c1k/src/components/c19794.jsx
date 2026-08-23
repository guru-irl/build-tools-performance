import React from 'react';
const LABEL_19794 = 'component_19794';
export function Component19794({ value = 19794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19794, 'data-value': derived.doubled }, children);
}
export default Component19794;
