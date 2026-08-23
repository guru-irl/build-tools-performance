import React from 'react';
const LABEL_7486 = 'component_7486';
export function Component7486({ value = 7486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7486, 'data-value': derived.doubled }, children);
}
export default Component7486;
