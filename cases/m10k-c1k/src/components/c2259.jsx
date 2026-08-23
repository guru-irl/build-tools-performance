import React from 'react';
const LABEL_2259 = 'component_2259';
export function Component2259({ value = 2259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2259, 'data-value': derived.doubled }, children);
}
export default Component2259;
