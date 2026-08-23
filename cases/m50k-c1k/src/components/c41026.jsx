import React from 'react';
const LABEL_41026 = 'component_41026';
export function Component41026({ value = 41026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41026, 'data-value': derived.doubled }, children);
}
export default Component41026;
