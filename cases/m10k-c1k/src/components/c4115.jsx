import React from 'react';
const LABEL_4115 = 'component_4115';
export function Component4115({ value = 4115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4115, 'data-value': derived.doubled }, children);
}
export default Component4115;
