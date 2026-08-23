import React from 'react';
const LABEL_16733 = 'component_16733';
export function Component16733({ value = 16733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16733, 'data-value': derived.doubled }, children);
}
export default Component16733;
