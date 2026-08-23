import React from 'react';
const LABEL_42632 = 'component_42632';
export function Component42632({ value = 42632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42632, 'data-value': derived.doubled }, children);
}
export default Component42632;
