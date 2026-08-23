import React from 'react';
const LABEL_3998 = 'component_3998';
export function Component3998({ value = 3998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3998, 'data-value': derived.doubled }, children);
}
export default Component3998;
