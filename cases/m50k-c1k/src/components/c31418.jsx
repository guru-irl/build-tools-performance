import React from 'react';
const LABEL_31418 = 'component_31418';
export function Component31418({ value = 31418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31418, 'data-value': derived.doubled }, children);
}
export default Component31418;
