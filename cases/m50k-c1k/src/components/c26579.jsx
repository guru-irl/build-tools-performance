import React from 'react';
const LABEL_26579 = 'component_26579';
export function Component26579({ value = 26579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26579, 'data-value': derived.doubled }, children);
}
export default Component26579;
