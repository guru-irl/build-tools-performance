import React from 'react';
const LABEL_37696 = 'component_37696';
export function Component37696({ value = 37696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37696, 'data-value': derived.doubled }, children);
}
export default Component37696;
