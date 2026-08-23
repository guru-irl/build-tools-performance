import React from 'react';
const LABEL_23670 = 'component_23670';
export function Component23670({ value = 23670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23670, 'data-value': derived.doubled }, children);
}
export default Component23670;
