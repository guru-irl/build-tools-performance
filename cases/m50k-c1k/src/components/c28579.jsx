import React from 'react';
const LABEL_28579 = 'component_28579';
export function Component28579({ value = 28579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28579, 'data-value': derived.doubled }, children);
}
export default Component28579;
