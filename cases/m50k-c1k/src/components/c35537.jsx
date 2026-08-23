import React from 'react';
const LABEL_35537 = 'component_35537';
export function Component35537({ value = 35537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35537, 'data-value': derived.doubled }, children);
}
export default Component35537;
