import React from 'react';
const LABEL_24289 = 'component_24289';
export function Component24289({ value = 24289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24289, 'data-value': derived.doubled }, children);
}
export default Component24289;
