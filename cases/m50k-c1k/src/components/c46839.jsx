import React from 'react';
const LABEL_46839 = 'component_46839';
export function Component46839({ value = 46839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46839, 'data-value': derived.doubled }, children);
}
export default Component46839;
