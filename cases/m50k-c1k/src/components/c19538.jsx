import React from 'react';
const LABEL_19538 = 'component_19538';
export function Component19538({ value = 19538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19538, 'data-value': derived.doubled }, children);
}
export default Component19538;
