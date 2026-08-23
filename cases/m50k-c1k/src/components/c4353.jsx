import React from 'react';
const LABEL_4353 = 'component_4353';
export function Component4353({ value = 4353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4353, 'data-value': derived.doubled }, children);
}
export default Component4353;
