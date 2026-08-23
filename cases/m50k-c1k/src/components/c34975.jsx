import React from 'react';
const LABEL_34975 = 'component_34975';
export function Component34975({ value = 34975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34975, 'data-value': derived.doubled }, children);
}
export default Component34975;
