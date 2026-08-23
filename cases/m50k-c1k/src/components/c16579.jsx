import React from 'react';
const LABEL_16579 = 'component_16579';
export function Component16579({ value = 16579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16579, 'data-value': derived.doubled }, children);
}
export default Component16579;
