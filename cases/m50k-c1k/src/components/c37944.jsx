import React from 'react';
const LABEL_37944 = 'component_37944';
export function Component37944({ value = 37944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37944, 'data-value': derived.doubled }, children);
}
export default Component37944;
