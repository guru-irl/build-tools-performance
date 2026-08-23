import React from 'react';
const LABEL_11706 = 'component_11706';
export function Component11706({ value = 11706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11706, 'data-value': derived.doubled }, children);
}
export default Component11706;
