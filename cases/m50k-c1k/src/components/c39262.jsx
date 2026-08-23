import React from 'react';
const LABEL_39262 = 'component_39262';
export function Component39262({ value = 39262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39262, 'data-value': derived.doubled }, children);
}
export default Component39262;
