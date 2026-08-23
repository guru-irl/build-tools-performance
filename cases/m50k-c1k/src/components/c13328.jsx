import React from 'react';
const LABEL_13328 = 'component_13328';
export function Component13328({ value = 13328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13328, 'data-value': derived.doubled }, children);
}
export default Component13328;
