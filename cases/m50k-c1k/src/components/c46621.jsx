import React from 'react';
const LABEL_46621 = 'component_46621';
export function Component46621({ value = 46621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46621, 'data-value': derived.doubled }, children);
}
export default Component46621;
