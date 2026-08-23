import React from 'react';
const LABEL_40543 = 'component_40543';
export function Component40543({ value = 40543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40543, 'data-value': derived.doubled }, children);
}
export default Component40543;
