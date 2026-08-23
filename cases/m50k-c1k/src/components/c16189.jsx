import React from 'react';
const LABEL_16189 = 'component_16189';
export function Component16189({ value = 16189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16189, 'data-value': derived.doubled }, children);
}
export default Component16189;
