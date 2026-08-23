import React from 'react';
const LABEL_33373 = 'component_33373';
export function Component33373({ value = 33373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33373, 'data-value': derived.doubled }, children);
}
export default Component33373;
