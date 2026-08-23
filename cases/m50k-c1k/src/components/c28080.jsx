import React from 'react';
const LABEL_28080 = 'component_28080';
export function Component28080({ value = 28080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28080, 'data-value': derived.doubled }, children);
}
export default Component28080;
