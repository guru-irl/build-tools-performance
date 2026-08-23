import React from 'react';
const LABEL_13687 = 'component_13687';
export function Component13687({ value = 13687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13687, 'data-value': derived.doubled }, children);
}
export default Component13687;
