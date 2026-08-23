import React from 'react';
const LABEL_18424 = 'component_18424';
export function Component18424({ value = 18424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18424, 'data-value': derived.doubled }, children);
}
export default Component18424;
