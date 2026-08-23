import React from 'react';
const LABEL_5537 = 'component_5537';
export function Component5537({ value = 5537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5537, 'data-value': derived.doubled }, children);
}
export default Component5537;
