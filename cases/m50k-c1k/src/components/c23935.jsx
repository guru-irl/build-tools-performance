import React from 'react';
const LABEL_23935 = 'component_23935';
export function Component23935({ value = 23935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23935, 'data-value': derived.doubled }, children);
}
export default Component23935;
