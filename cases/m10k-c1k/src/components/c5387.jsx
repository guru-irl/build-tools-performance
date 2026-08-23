import React from 'react';
const LABEL_5387 = 'component_5387';
export function Component5387({ value = 5387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5387, 'data-value': derived.doubled }, children);
}
export default Component5387;
