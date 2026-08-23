import React from 'react';
const LABEL_43978 = 'component_43978';
export function Component43978({ value = 43978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43978, 'data-value': derived.doubled }, children);
}
export default Component43978;
