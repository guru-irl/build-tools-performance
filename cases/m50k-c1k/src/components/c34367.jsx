import React from 'react';
const LABEL_34367 = 'component_34367';
export function Component34367({ value = 34367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34367, 'data-value': derived.doubled }, children);
}
export default Component34367;
