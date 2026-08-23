import React from 'react';
const LABEL_6786 = 'component_6786';
export function Component6786({ value = 6786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6786, 'data-value': derived.doubled }, children);
}
export default Component6786;
