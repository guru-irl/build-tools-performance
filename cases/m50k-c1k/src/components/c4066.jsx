import React from 'react';
const LABEL_4066 = 'component_4066';
export function Component4066({ value = 4066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4066, 'data-value': derived.doubled }, children);
}
export default Component4066;
