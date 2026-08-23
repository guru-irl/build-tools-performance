import React from 'react';
const LABEL_13400 = 'component_13400';
export function Component13400({ value = 13400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13400, 'data-value': derived.doubled }, children);
}
export default Component13400;
