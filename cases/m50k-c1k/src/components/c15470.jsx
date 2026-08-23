import React from 'react';
const LABEL_15470 = 'component_15470';
export function Component15470({ value = 15470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15470, 'data-value': derived.doubled }, children);
}
export default Component15470;
