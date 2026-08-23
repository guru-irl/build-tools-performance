import React from 'react';
const LABEL_41952 = 'component_41952';
export function Component41952({ value = 41952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41952, 'data-value': derived.doubled }, children);
}
export default Component41952;
