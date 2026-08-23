import React from 'react';
const LABEL_4730 = 'component_4730';
export function Component4730({ value = 4730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4730, 'data-value': derived.doubled }, children);
}
export default Component4730;
