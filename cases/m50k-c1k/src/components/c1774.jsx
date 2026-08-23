import React from 'react';
const LABEL_1774 = 'component_1774';
export function Component1774({ value = 1774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1774, 'data-value': derived.doubled }, children);
}
export default Component1774;
