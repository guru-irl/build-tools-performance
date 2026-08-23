import React from 'react';
const LABEL_7774 = 'component_7774';
export function Component7774({ value = 7774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7774, 'data-value': derived.doubled }, children);
}
export default Component7774;
