import React from 'react';
const LABEL_45803 = 'component_45803';
export function Component45803({ value = 45803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45803, 'data-value': derived.doubled }, children);
}
export default Component45803;
