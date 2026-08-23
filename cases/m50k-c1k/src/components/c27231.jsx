import React from 'react';
const LABEL_27231 = 'component_27231';
export function Component27231({ value = 27231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27231, 'data-value': derived.doubled }, children);
}
export default Component27231;
