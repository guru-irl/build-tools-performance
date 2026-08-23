import React from 'react';
const LABEL_28538 = 'component_28538';
export function Component28538({ value = 28538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28538, 'data-value': derived.doubled }, children);
}
export default Component28538;
