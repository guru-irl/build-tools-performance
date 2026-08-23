import React from 'react';
const LABEL_10518 = 'component_10518';
export function Component10518({ value = 10518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10518, 'data-value': derived.doubled }, children);
}
export default Component10518;
