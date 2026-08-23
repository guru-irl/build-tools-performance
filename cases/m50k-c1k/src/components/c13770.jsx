import React from 'react';
const LABEL_13770 = 'component_13770';
export function Component13770({ value = 13770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13770, 'data-value': derived.doubled }, children);
}
export default Component13770;
