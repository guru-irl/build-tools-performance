import React from 'react';
const LABEL_20978 = 'component_20978';
export function Component20978({ value = 20978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20978, 'data-value': derived.doubled }, children);
}
export default Component20978;
