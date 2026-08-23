import React from 'react';
const LABEL_39480 = 'component_39480';
export function Component39480({ value = 39480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39480, 'data-value': derived.doubled }, children);
}
export default Component39480;
