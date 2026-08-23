import React from 'react';
const LABEL_14935 = 'component_14935';
export function Component14935({ value = 14935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14935, 'data-value': derived.doubled }, children);
}
export default Component14935;
