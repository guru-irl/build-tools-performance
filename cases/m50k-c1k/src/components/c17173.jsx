import React from 'react';
const LABEL_17173 = 'component_17173';
export function Component17173({ value = 17173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17173, 'data-value': derived.doubled }, children);
}
export default Component17173;
