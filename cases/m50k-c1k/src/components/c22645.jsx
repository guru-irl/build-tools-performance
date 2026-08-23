import React from 'react';
const LABEL_22645 = 'component_22645';
export function Component22645({ value = 22645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22645, 'data-value': derived.doubled }, children);
}
export default Component22645;
