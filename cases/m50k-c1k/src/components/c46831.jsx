import React from 'react';
const LABEL_46831 = 'component_46831';
export function Component46831({ value = 46831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46831, 'data-value': derived.doubled }, children);
}
export default Component46831;
