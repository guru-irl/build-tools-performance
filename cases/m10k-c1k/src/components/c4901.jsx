import React from 'react';
const LABEL_4901 = 'component_4901';
export function Component4901({ value = 4901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4901, 'data-value': derived.doubled }, children);
}
export default Component4901;
