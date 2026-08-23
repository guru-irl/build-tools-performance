import React from 'react';
const LABEL_21730 = 'component_21730';
export function Component21730({ value = 21730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21730, 'data-value': derived.doubled }, children);
}
export default Component21730;
