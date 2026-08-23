import React from 'react';
const LABEL_19407 = 'component_19407';
export function Component19407({ value = 19407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19407, 'data-value': derived.doubled }, children);
}
export default Component19407;
