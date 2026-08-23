import React from 'react';
const LABEL_20317 = 'component_20317';
export function Component20317({ value = 20317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20317, 'data-value': derived.doubled }, children);
}
export default Component20317;
