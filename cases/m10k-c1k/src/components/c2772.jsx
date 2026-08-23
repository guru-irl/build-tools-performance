import React from 'react';
const LABEL_2772 = 'component_2772';
export function Component2772({ value = 2772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2772, 'data-value': derived.doubled }, children);
}
export default Component2772;
