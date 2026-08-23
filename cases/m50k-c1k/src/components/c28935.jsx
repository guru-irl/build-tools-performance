import React from 'react';
const LABEL_28935 = 'component_28935';
export function Component28935({ value = 28935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28935, 'data-value': derived.doubled }, children);
}
export default Component28935;
