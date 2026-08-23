import React from 'react';
const LABEL_17078 = 'component_17078';
export function Component17078({ value = 17078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17078, 'data-value': derived.doubled }, children);
}
export default Component17078;
