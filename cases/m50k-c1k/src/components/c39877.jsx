import React from 'react';
const LABEL_39877 = 'component_39877';
export function Component39877({ value = 39877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39877, 'data-value': derived.doubled }, children);
}
export default Component39877;
