import React from 'react';
const LABEL_36400 = 'component_36400';
export function Component36400({ value = 36400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36400, 'data-value': derived.doubled }, children);
}
export default Component36400;
