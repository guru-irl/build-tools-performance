import React from 'react';
const LABEL_26235 = 'component_26235';
export function Component26235({ value = 26235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26235, 'data-value': derived.doubled }, children);
}
export default Component26235;
