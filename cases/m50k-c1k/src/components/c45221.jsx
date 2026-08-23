import React from 'react';
const LABEL_45221 = 'component_45221';
export function Component45221({ value = 45221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45221, 'data-value': derived.doubled }, children);
}
export default Component45221;
