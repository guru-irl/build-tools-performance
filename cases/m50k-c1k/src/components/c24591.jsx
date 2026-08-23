import React from 'react';
const LABEL_24591 = 'component_24591';
export function Component24591({ value = 24591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24591, 'data-value': derived.doubled }, children);
}
export default Component24591;
