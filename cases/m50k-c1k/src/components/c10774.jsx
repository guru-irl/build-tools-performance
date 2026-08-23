import React from 'react';
const LABEL_10774 = 'component_10774';
export function Component10774({ value = 10774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10774, 'data-value': derived.doubled }, children);
}
export default Component10774;
