import React from 'react';
const LABEL_44304 = 'component_44304';
export function Component44304({ value = 44304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44304, 'data-value': derived.doubled }, children);
}
export default Component44304;
