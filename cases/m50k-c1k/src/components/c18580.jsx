import React from 'react';
const LABEL_18580 = 'component_18580';
export function Component18580({ value = 18580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18580, 'data-value': derived.doubled }, children);
}
export default Component18580;
