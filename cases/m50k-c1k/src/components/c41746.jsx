import React from 'react';
const LABEL_41746 = 'component_41746';
export function Component41746({ value = 41746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41746, 'data-value': derived.doubled }, children);
}
export default Component41746;
