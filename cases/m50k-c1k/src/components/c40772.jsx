import React from 'react';
const LABEL_40772 = 'component_40772';
export function Component40772({ value = 40772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40772, 'data-value': derived.doubled }, children);
}
export default Component40772;
