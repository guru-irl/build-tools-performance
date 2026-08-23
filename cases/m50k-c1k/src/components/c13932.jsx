import React from 'react';
const LABEL_13932 = 'component_13932';
export function Component13932({ value = 13932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13932, 'data-value': derived.doubled }, children);
}
export default Component13932;
