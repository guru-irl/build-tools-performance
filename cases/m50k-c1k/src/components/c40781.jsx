import React from 'react';
const LABEL_40781 = 'component_40781';
export function Component40781({ value = 40781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40781, 'data-value': derived.doubled }, children);
}
export default Component40781;
