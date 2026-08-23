import React from 'react';
const LABEL_35240 = 'component_35240';
export function Component35240({ value = 35240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35240, 'data-value': derived.doubled }, children);
}
export default Component35240;
