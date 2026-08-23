import React from 'react';
const LABEL_37823 = 'component_37823';
export function Component37823({ value = 37823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37823, 'data-value': derived.doubled }, children);
}
export default Component37823;
