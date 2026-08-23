import React from 'react';
const LABEL_46244 = 'component_46244';
export function Component46244({ value = 46244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46244, 'data-value': derived.doubled }, children);
}
export default Component46244;
