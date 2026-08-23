import React from 'react';
const LABEL_20105 = 'component_20105';
export function Component20105({ value = 20105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20105, 'data-value': derived.doubled }, children);
}
export default Component20105;
