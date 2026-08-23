import React from 'react';
const LABEL_4801 = 'component_4801';
export function Component4801({ value = 4801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4801, 'data-value': derived.doubled }, children);
}
export default Component4801;
