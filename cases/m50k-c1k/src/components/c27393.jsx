import React from 'react';
const LABEL_27393 = 'component_27393';
export function Component27393({ value = 27393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27393, 'data-value': derived.doubled }, children);
}
export default Component27393;
