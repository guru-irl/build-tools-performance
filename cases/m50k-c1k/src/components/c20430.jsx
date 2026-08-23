import React from 'react';
const LABEL_20430 = 'component_20430';
export function Component20430({ value = 20430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20430, 'data-value': derived.doubled }, children);
}
export default Component20430;
