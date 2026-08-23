import React from 'react';
const LABEL_4978 = 'component_4978';
export function Component4978({ value = 4978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4978, 'data-value': derived.doubled }, children);
}
export default Component4978;
