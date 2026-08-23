import React from 'react';
const LABEL_25543 = 'component_25543';
export function Component25543({ value = 25543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25543, 'data-value': derived.doubled }, children);
}
export default Component25543;
