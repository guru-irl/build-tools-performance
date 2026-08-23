import React from 'react';
const LABEL_40317 = 'component_40317';
export function Component40317({ value = 40317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40317, 'data-value': derived.doubled }, children);
}
export default Component40317;
