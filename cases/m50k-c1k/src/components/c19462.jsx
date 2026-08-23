import React from 'react';
const LABEL_19462 = 'component_19462';
export function Component19462({ value = 19462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19462, 'data-value': derived.doubled }, children);
}
export default Component19462;
