import React from 'react';
const LABEL_24536 = 'component_24536';
export function Component24536({ value = 24536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24536, 'data-value': derived.doubled }, children);
}
export default Component24536;
