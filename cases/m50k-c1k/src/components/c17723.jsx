import React from 'react';
const LABEL_17723 = 'component_17723';
export function Component17723({ value = 17723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17723, 'data-value': derived.doubled }, children);
}
export default Component17723;
