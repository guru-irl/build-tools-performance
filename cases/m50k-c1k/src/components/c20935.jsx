import React from 'react';
const LABEL_20935 = 'component_20935';
export function Component20935({ value = 20935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20935, 'data-value': derived.doubled }, children);
}
export default Component20935;
