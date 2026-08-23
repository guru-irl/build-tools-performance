import React from 'react';
const LABEL_4400 = 'component_4400';
export function Component4400({ value = 4400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4400, 'data-value': derived.doubled }, children);
}
export default Component4400;
