import React from 'react';
const LABEL_24946 = 'component_24946';
export function Component24946({ value = 24946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24946, 'data-value': derived.doubled }, children);
}
export default Component24946;
