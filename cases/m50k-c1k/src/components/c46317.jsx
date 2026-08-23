import React from 'react';
const LABEL_46317 = 'component_46317';
export function Component46317({ value = 46317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46317, 'data-value': derived.doubled }, children);
}
export default Component46317;
