import React from 'react';
const LABEL_45901 = 'component_45901';
export function Component45901({ value = 45901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45901, 'data-value': derived.doubled }, children);
}
export default Component45901;
