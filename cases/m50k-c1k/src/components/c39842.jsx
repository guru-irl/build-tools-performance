import React from 'react';
const LABEL_39842 = 'component_39842';
export function Component39842({ value = 39842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39842, 'data-value': derived.doubled }, children);
}
export default Component39842;
