import React from 'react';
const LABEL_37935 = 'component_37935';
export function Component37935({ value = 37935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37935, 'data-value': derived.doubled }, children);
}
export default Component37935;
