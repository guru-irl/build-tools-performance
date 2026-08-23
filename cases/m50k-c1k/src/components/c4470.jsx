import React from 'react';
const LABEL_4470 = 'component_4470';
export function Component4470({ value = 4470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4470, 'data-value': derived.doubled }, children);
}
export default Component4470;
