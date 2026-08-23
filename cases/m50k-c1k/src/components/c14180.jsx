import React from 'react';
const LABEL_14180 = 'component_14180';
export function Component14180({ value = 14180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14180, 'data-value': derived.doubled }, children);
}
export default Component14180;
