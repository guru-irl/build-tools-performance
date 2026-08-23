import React from 'react';
const LABEL_16774 = 'component_16774';
export function Component16774({ value = 16774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16774, 'data-value': derived.doubled }, children);
}
export default Component16774;
