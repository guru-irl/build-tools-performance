import React from 'react';
const LABEL_37461 = 'component_37461';
export function Component37461({ value = 37461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37461, 'data-value': derived.doubled }, children);
}
export default Component37461;
