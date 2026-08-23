import React from 'react';
const LABEL_37978 = 'component_37978';
export function Component37978({ value = 37978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37978, 'data-value': derived.doubled }, children);
}
export default Component37978;
