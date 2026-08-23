import React from 'react';
const LABEL_17392 = 'component_17392';
export function Component17392({ value = 17392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17392, 'data-value': derived.doubled }, children);
}
export default Component17392;
