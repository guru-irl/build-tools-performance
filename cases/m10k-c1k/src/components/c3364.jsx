import React from 'react';
const LABEL_3364 = 'component_3364';
export function Component3364({ value = 3364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3364, 'data-value': derived.doubled }, children);
}
export default Component3364;
