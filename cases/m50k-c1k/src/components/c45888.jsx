import React from 'react';
const LABEL_45888 = 'component_45888';
export function Component45888({ value = 45888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45888, 'data-value': derived.doubled }, children);
}
export default Component45888;
