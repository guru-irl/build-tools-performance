import React from 'react';
const LABEL_11289 = 'component_11289';
export function Component11289({ value = 11289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11289, 'data-value': derived.doubled }, children);
}
export default Component11289;
