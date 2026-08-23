import React from 'react';
const LABEL_18832 = 'component_18832';
export function Component18832({ value = 18832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18832, 'data-value': derived.doubled }, children);
}
export default Component18832;
