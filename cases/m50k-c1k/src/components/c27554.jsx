import React from 'react';
const LABEL_27554 = 'component_27554';
export function Component27554({ value = 27554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27554, 'data-value': derived.doubled }, children);
}
export default Component27554;
