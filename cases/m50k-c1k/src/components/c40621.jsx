import React from 'react';
const LABEL_40621 = 'component_40621';
export function Component40621({ value = 40621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40621, 'data-value': derived.doubled }, children);
}
export default Component40621;
