import React from 'react';
const LABEL_45609 = 'component_45609';
export function Component45609({ value = 45609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45609, 'data-value': derived.doubled }, children);
}
export default Component45609;
