import React from 'react';
const LABEL_19900 = 'component_19900';
export function Component19900({ value = 19900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19900, 'data-value': derived.doubled }, children);
}
export default Component19900;
