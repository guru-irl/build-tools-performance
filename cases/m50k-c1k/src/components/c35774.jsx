import React from 'react';
const LABEL_35774 = 'component_35774';
export function Component35774({ value = 35774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35774, 'data-value': derived.doubled }, children);
}
export default Component35774;
