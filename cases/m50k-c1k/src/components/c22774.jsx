import React from 'react';
const LABEL_22774 = 'component_22774';
export function Component22774({ value = 22774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22774, 'data-value': derived.doubled }, children);
}
export default Component22774;
