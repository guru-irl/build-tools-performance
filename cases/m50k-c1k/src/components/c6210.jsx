import React from 'react';
const LABEL_6210 = 'component_6210';
export function Component6210({ value = 6210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6210, 'data-value': derived.doubled }, children);
}
export default Component6210;
