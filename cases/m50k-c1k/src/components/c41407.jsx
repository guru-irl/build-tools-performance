import React from 'react';
const LABEL_41407 = 'component_41407';
export function Component41407({ value = 41407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41407, 'data-value': derived.doubled }, children);
}
export default Component41407;
