import React from 'react';
const LABEL_28138 = 'component_28138';
export function Component28138({ value = 28138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28138, 'data-value': derived.doubled }, children);
}
export default Component28138;
