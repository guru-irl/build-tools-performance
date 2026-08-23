import React from 'react';
const LABEL_22543 = 'component_22543';
export function Component22543({ value = 22543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22543, 'data-value': derived.doubled }, children);
}
export default Component22543;
