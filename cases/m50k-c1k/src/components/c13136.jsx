import React from 'react';
const LABEL_13136 = 'component_13136';
export function Component13136({ value = 13136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13136, 'data-value': derived.doubled }, children);
}
export default Component13136;
