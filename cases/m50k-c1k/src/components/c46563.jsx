import React from 'react';
const LABEL_46563 = 'component_46563';
export function Component46563({ value = 46563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46563, 'data-value': derived.doubled }, children);
}
export default Component46563;
