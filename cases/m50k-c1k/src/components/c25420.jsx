import React from 'react';
const LABEL_25420 = 'component_25420';
export function Component25420({ value = 25420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25420, 'data-value': derived.doubled }, children);
}
export default Component25420;
