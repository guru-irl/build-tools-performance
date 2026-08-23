import React from 'react';
const LABEL_26217 = 'component_26217';
export function Component26217({ value = 26217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26217, 'data-value': derived.doubled }, children);
}
export default Component26217;
