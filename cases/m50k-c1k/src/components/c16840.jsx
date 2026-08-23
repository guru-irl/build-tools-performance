import React from 'react';
const LABEL_16840 = 'component_16840';
export function Component16840({ value = 16840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16840, 'data-value': derived.doubled }, children);
}
export default Component16840;
