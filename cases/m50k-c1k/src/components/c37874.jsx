import React from 'react';
const LABEL_37874 = 'component_37874';
export function Component37874({ value = 37874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37874, 'data-value': derived.doubled }, children);
}
export default Component37874;
