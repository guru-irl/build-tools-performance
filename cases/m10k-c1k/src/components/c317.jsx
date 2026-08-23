import React from 'react';
const LABEL_317 = 'component_317';
export function Component317({ value = 317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_317, 'data-value': derived.doubled }, children);
}
export default Component317;
