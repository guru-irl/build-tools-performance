import React from 'react';
const LABEL_772 = 'component_772';
export function Component772({ value = 772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_772, 'data-value': derived.doubled }, children);
}
export default Component772;
