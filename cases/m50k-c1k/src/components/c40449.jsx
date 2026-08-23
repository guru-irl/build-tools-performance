import React from 'react';
const LABEL_40449 = 'component_40449';
export function Component40449({ value = 40449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40449, 'data-value': derived.doubled }, children);
}
export default Component40449;
