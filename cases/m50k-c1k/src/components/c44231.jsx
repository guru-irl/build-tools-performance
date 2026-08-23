import React from 'react';
const LABEL_44231 = 'component_44231';
export function Component44231({ value = 44231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44231, 'data-value': derived.doubled }, children);
}
export default Component44231;
