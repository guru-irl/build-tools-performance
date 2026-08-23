import React from 'react';
const LABEL_39585 = 'component_39585';
export function Component39585({ value = 39585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39585, 'data-value': derived.doubled }, children);
}
export default Component39585;
