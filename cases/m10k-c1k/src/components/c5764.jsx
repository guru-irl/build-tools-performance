import React from 'react';
const LABEL_5764 = 'component_5764';
export function Component5764({ value = 5764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5764, 'data-value': derived.doubled }, children);
}
export default Component5764;
