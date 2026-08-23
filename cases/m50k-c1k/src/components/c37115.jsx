import React from 'react';
const LABEL_37115 = 'component_37115';
export function Component37115({ value = 37115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37115, 'data-value': derived.doubled }, children);
}
export default Component37115;
