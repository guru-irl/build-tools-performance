import React from 'react';
const LABEL_4018 = 'component_4018';
export function Component4018({ value = 4018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4018, 'data-value': derived.doubled }, children);
}
export default Component4018;
