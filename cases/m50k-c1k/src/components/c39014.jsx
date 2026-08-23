import React from 'react';
const LABEL_39014 = 'component_39014';
export function Component39014({ value = 39014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39014, 'data-value': derived.doubled }, children);
}
export default Component39014;
