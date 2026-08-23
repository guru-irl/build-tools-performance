import React from 'react';
const LABEL_32088 = 'component_32088';
export function Component32088({ value = 32088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32088, 'data-value': derived.doubled }, children);
}
export default Component32088;
