import React from 'react';
const LABEL_37579 = 'component_37579';
export function Component37579({ value = 37579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37579, 'data-value': derived.doubled }, children);
}
export default Component37579;
