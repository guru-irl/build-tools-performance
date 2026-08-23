import React from 'react';
const LABEL_19850 = 'component_19850';
export function Component19850({ value = 19850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19850, 'data-value': derived.doubled }, children);
}
export default Component19850;
