import React from 'react';
const LABEL_25730 = 'component_25730';
export function Component25730({ value = 25730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25730, 'data-value': derived.doubled }, children);
}
export default Component25730;
