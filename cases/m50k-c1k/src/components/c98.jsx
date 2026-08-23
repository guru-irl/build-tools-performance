import React from 'react';
const LABEL_98 = 'component_98';
export function Component98({ value = 98, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_98, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_98, 'data-value': derived.doubled }, children);
}
export default Component98;
