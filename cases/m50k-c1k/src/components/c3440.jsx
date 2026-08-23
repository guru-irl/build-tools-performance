import React from 'react';
const LABEL_3440 = 'component_3440';
export function Component3440({ value = 3440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3440, 'data-value': derived.doubled }, children);
}
export default Component3440;
