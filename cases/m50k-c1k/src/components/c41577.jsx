import React from 'react';
const LABEL_41577 = 'component_41577';
export function Component41577({ value = 41577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41577, 'data-value': derived.doubled }, children);
}
export default Component41577;
