import React from 'react';
const LABEL_46066 = 'component_46066';
export function Component46066({ value = 46066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46066, 'data-value': derived.doubled }, children);
}
export default Component46066;
