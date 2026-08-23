import React from 'react';
const LABEL_34400 = 'component_34400';
export function Component34400({ value = 34400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34400, 'data-value': derived.doubled }, children);
}
export default Component34400;
