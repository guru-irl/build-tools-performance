import React from 'react';
const LABEL_4724 = 'component_4724';
export function Component4724({ value = 4724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4724, 'data-value': derived.doubled }, children);
}
export default Component4724;
