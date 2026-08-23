import React from 'react';
const LABEL_10579 = 'component_10579';
export function Component10579({ value = 10579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10579, 'data-value': derived.doubled }, children);
}
export default Component10579;
