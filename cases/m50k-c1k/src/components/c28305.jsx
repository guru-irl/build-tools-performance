import React from 'react';
const LABEL_28305 = 'component_28305';
export function Component28305({ value = 28305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28305, 'data-value': derived.doubled }, children);
}
export default Component28305;
