import React from 'react';
const LABEL_24858 = 'component_24858';
export function Component24858({ value = 24858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24858, 'data-value': derived.doubled }, children);
}
export default Component24858;
