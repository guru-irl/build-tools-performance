import React from 'react';
const LABEL_3017 = 'component_3017';
export function Component3017({ value = 3017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3017, 'data-value': derived.doubled }, children);
}
export default Component3017;
