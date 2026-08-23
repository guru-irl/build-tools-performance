import React from 'react';
const LABEL_38998 = 'component_38998';
export function Component38998({ value = 38998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38998, 'data-value': derived.doubled }, children);
}
export default Component38998;
