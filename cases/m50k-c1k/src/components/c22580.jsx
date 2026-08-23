import React from 'react';
const LABEL_22580 = 'component_22580';
export function Component22580({ value = 22580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22580, 'data-value': derived.doubled }, children);
}
export default Component22580;
