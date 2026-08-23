import React from 'react';
const LABEL_31538 = 'component_31538';
export function Component31538({ value = 31538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31538, 'data-value': derived.doubled }, children);
}
export default Component31538;
