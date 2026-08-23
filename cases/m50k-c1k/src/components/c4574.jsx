import React from 'react';
const LABEL_4574 = 'component_4574';
export function Component4574({ value = 4574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4574, 'data-value': derived.doubled }, children);
}
export default Component4574;
