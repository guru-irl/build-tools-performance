import React from 'react';
const LABEL_16195 = 'component_16195';
export function Component16195({ value = 16195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16195, 'data-value': derived.doubled }, children);
}
export default Component16195;
