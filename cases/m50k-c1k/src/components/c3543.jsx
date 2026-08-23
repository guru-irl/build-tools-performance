import React from 'react';
const LABEL_3543 = 'component_3543';
export function Component3543({ value = 3543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3543, 'data-value': derived.doubled }, children);
}
export default Component3543;
