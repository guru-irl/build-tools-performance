import React from 'react';
const LABEL_29195 = 'component_29195';
export function Component29195({ value = 29195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29195, 'data-value': derived.doubled }, children);
}
export default Component29195;
