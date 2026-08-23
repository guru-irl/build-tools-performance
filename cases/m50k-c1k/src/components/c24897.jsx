import React from 'react';
const LABEL_24897 = 'component_24897';
export function Component24897({ value = 24897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24897, 'data-value': derived.doubled }, children);
}
export default Component24897;
