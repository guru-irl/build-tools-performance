import React from 'react';
const LABEL_18587 = 'component_18587';
export function Component18587({ value = 18587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18587, 'data-value': derived.doubled }, children);
}
export default Component18587;
