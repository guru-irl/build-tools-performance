import React from 'react';
const LABEL_37538 = 'component_37538';
export function Component37538({ value = 37538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37538, 'data-value': derived.doubled }, children);
}
export default Component37538;
