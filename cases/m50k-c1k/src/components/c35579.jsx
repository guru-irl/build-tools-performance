import React from 'react';
const LABEL_35579 = 'component_35579';
export function Component35579({ value = 35579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35579, 'data-value': derived.doubled }, children);
}
export default Component35579;
