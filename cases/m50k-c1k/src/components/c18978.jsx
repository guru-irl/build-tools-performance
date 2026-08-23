import React from 'react';
const LABEL_18978 = 'component_18978';
export function Component18978({ value = 18978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18978, 'data-value': derived.doubled }, children);
}
export default Component18978;
