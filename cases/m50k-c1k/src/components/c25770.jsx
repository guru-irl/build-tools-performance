import React from 'react';
const LABEL_25770 = 'component_25770';
export function Component25770({ value = 25770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25770, 'data-value': derived.doubled }, children);
}
export default Component25770;
