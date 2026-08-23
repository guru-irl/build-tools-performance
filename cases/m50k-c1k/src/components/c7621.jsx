import React from 'react';
const LABEL_7621 = 'component_7621';
export function Component7621({ value = 7621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7621, 'data-value': derived.doubled }, children);
}
export default Component7621;
