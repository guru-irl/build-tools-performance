import React from 'react';
const LABEL_24888 = 'component_24888';
export function Component24888({ value = 24888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24888, 'data-value': derived.doubled }, children);
}
export default Component24888;
