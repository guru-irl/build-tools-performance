import React from 'react';
const LABEL_42538 = 'component_42538';
export function Component42538({ value = 42538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42538, 'data-value': derived.doubled }, children);
}
export default Component42538;
