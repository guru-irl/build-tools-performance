import React from 'react';
const LABEL_13543 = 'component_13543';
export function Component13543({ value = 13543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13543, 'data-value': derived.doubled }, children);
}
export default Component13543;
