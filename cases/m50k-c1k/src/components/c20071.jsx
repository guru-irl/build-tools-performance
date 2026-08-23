import React from 'react';
const LABEL_20071 = 'component_20071';
export function Component20071({ value = 20071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20071, 'data-value': derived.doubled }, children);
}
export default Component20071;
