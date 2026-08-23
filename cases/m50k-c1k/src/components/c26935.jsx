import React from 'react';
const LABEL_26935 = 'component_26935';
export function Component26935({ value = 26935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26935, 'data-value': derived.doubled }, children);
}
export default Component26935;
