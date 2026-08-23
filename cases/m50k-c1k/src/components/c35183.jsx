import React from 'react';
const LABEL_35183 = 'component_35183';
export function Component35183({ value = 35183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35183, 'data-value': derived.doubled }, children);
}
export default Component35183;
