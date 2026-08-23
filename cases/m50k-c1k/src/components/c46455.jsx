import React from 'react';
const LABEL_46455 = 'component_46455';
export function Component46455({ value = 46455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46455, 'data-value': derived.doubled }, children);
}
export default Component46455;
