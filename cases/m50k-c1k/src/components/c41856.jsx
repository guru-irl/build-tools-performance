import React from 'react';
const LABEL_41856 = 'component_41856';
export function Component41856({ value = 41856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41856, 'data-value': derived.doubled }, children);
}
export default Component41856;
