import React from 'react';
const LABEL_7289 = 'component_7289';
export function Component7289({ value = 7289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7289, 'data-value': derived.doubled }, children);
}
export default Component7289;
