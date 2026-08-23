import React from 'react';
const LABEL_12082 = 'component_12082';
export function Component12082({ value = 12082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12082, 'data-value': derived.doubled }, children);
}
export default Component12082;
