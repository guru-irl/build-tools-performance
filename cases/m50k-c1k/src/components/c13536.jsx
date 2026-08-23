import React from 'react';
const LABEL_13536 = 'component_13536';
export function Component13536({ value = 13536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13536, 'data-value': derived.doubled }, children);
}
export default Component13536;
