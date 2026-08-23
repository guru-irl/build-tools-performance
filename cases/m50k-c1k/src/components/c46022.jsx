import React from 'react';
const LABEL_46022 = 'component_46022';
export function Component46022({ value = 46022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46022, 'data-value': derived.doubled }, children);
}
export default Component46022;
