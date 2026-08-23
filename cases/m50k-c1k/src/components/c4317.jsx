import React from 'react';
const LABEL_4317 = 'component_4317';
export function Component4317({ value = 4317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4317, 'data-value': derived.doubled }, children);
}
export default Component4317;
