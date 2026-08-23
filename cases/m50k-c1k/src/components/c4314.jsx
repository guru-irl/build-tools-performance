import React from 'react';
const LABEL_4314 = 'component_4314';
export function Component4314({ value = 4314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4314, 'data-value': derived.doubled }, children);
}
export default Component4314;
