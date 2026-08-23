import React from 'react';
const LABEL_2543 = 'component_2543';
export function Component2543({ value = 2543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2543, 'data-value': derived.doubled }, children);
}
export default Component2543;
