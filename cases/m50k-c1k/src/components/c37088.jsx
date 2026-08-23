import React from 'react';
const LABEL_37088 = 'component_37088';
export function Component37088({ value = 37088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37088, 'data-value': derived.doubled }, children);
}
export default Component37088;
