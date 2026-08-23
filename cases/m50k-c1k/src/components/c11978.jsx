import React from 'react';
const LABEL_11978 = 'component_11978';
export function Component11978({ value = 11978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11978, 'data-value': derived.doubled }, children);
}
export default Component11978;
