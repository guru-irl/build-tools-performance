import React from 'react';
const LABEL_38520 = 'component_38520';
export function Component38520({ value = 38520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38520, 'data-value': derived.doubled }, children);
}
export default Component38520;
