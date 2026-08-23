import React from 'react';
const LABEL_12288 = 'component_12288';
export function Component12288({ value = 12288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12288, 'data-value': derived.doubled }, children);
}
export default Component12288;
