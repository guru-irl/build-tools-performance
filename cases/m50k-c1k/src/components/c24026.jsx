import React from 'react';
const LABEL_24026 = 'component_24026';
export function Component24026({ value = 24026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24026, 'data-value': derived.doubled }, children);
}
export default Component24026;
