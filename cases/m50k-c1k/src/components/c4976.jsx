import React from 'react';
const LABEL_4976 = 'component_4976';
export function Component4976({ value = 4976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4976, 'data-value': derived.doubled }, children);
}
export default Component4976;
