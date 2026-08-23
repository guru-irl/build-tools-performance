import React from 'react';
const LABEL_978 = 'component_978';
export function Component978({ value = 978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_978, 'data-value': derived.doubled }, children);
}
export default Component978;
