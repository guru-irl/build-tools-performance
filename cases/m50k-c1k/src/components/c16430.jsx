import React from 'react';
const LABEL_16430 = 'component_16430';
export function Component16430({ value = 16430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16430, 'data-value': derived.doubled }, children);
}
export default Component16430;
