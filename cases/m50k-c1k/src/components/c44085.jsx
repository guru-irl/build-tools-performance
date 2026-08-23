import React from 'react';
const LABEL_44085 = 'component_44085';
export function Component44085({ value = 44085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44085, 'data-value': derived.doubled }, children);
}
export default Component44085;
