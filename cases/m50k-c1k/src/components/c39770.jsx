import React from 'react';
const LABEL_39770 = 'component_39770';
export function Component39770({ value = 39770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39770, 'data-value': derived.doubled }, children);
}
export default Component39770;
