import React from 'react';
const LABEL_21543 = 'component_21543';
export function Component21543({ value = 21543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21543, 'data-value': derived.doubled }, children);
}
export default Component21543;
