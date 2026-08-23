import React from 'react';
const LABEL_24777 = 'component_24777';
export function Component24777({ value = 24777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24777, 'data-value': derived.doubled }, children);
}
export default Component24777;
