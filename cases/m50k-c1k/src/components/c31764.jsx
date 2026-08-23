import React from 'react';
const LABEL_31764 = 'component_31764';
export function Component31764({ value = 31764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31764, 'data-value': derived.doubled }, children);
}
export default Component31764;
