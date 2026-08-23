import React from 'react';
const LABEL_36576 = 'component_36576';
export function Component36576({ value = 36576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36576, 'data-value': derived.doubled }, children);
}
export default Component36576;
