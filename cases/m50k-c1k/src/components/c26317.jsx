import React from 'react';
const LABEL_26317 = 'component_26317';
export function Component26317({ value = 26317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26317, 'data-value': derived.doubled }, children);
}
export default Component26317;
