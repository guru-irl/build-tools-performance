import React from 'react';
const LABEL_17929 = 'component_17929';
export function Component17929({ value = 17929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17929, 'data-value': derived.doubled }, children);
}
export default Component17929;
