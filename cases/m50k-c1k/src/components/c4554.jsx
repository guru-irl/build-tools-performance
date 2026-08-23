import React from 'react';
const LABEL_4554 = 'component_4554';
export function Component4554({ value = 4554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4554, 'data-value': derived.doubled }, children);
}
export default Component4554;
