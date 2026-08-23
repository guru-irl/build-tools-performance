import React from 'react';
const LABEL_38978 = 'component_38978';
export function Component38978({ value = 38978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38978, 'data-value': derived.doubled }, children);
}
export default Component38978;
