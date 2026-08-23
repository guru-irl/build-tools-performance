import React from 'react';
const LABEL_39301 = 'component_39301';
export function Component39301({ value = 39301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39301, 'data-value': derived.doubled }, children);
}
export default Component39301;
