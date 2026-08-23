import React from 'react';
const LABEL_36190 = 'component_36190';
export function Component36190({ value = 36190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36190, 'data-value': derived.doubled }, children);
}
export default Component36190;
