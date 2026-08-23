import React from 'react';
const LABEL_25678 = 'component_25678';
export function Component25678({ value = 25678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25678, 'data-value': derived.doubled }, children);
}
export default Component25678;
