import React from 'react';
const LABEL_4689 = 'component_4689';
export function Component4689({ value = 4689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4689, 'data-value': derived.doubled }, children);
}
export default Component4689;
