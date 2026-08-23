import React from 'react';
const LABEL_45375 = 'component_45375';
export function Component45375({ value = 45375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45375, 'data-value': derived.doubled }, children);
}
export default Component45375;
