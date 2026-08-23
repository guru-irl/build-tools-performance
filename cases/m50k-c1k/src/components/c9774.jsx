import React from 'react';
const LABEL_9774 = 'component_9774';
export function Component9774({ value = 9774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9774, 'data-value': derived.doubled }, children);
}
export default Component9774;
