import React from 'react';
const LABEL_17183 = 'component_17183';
export function Component17183({ value = 17183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17183, 'data-value': derived.doubled }, children);
}
export default Component17183;
