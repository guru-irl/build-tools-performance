import React from 'react';
const LABEL_29622 = 'component_29622';
export function Component29622({ value = 29622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29622, 'data-value': derived.doubled }, children);
}
export default Component29622;
