import React from 'react';
const LABEL_16002 = 'component_16002';
export function Component16002({ value = 16002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16002, 'data-value': derived.doubled }, children);
}
export default Component16002;
