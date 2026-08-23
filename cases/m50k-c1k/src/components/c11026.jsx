import React from 'react';
const LABEL_11026 = 'component_11026';
export function Component11026({ value = 11026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11026, 'data-value': derived.doubled }, children);
}
export default Component11026;
