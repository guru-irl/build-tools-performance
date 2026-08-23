import React from 'react';
const LABEL_5538 = 'component_5538';
export function Component5538({ value = 5538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5538, 'data-value': derived.doubled }, children);
}
export default Component5538;
