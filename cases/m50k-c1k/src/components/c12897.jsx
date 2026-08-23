import React from 'react';
const LABEL_12897 = 'component_12897';
export function Component12897({ value = 12897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12897, 'data-value': derived.doubled }, children);
}
export default Component12897;
