import React from 'react';
const LABEL_45978 = 'component_45978';
export function Component45978({ value = 45978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45978, 'data-value': derived.doubled }, children);
}
export default Component45978;
