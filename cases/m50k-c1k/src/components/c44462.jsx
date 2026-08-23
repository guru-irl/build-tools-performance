import React from 'react';
const LABEL_44462 = 'component_44462';
export function Component44462({ value = 44462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44462, 'data-value': derived.doubled }, children);
}
export default Component44462;
