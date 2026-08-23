import React from 'react';
const LABEL_41538 = 'component_41538';
export function Component41538({ value = 41538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41538, 'data-value': derived.doubled }, children);
}
export default Component41538;
