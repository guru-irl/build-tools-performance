import React from 'react';
const LABEL_38288 = 'component_38288';
export function Component38288({ value = 38288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38288, 'data-value': derived.doubled }, children);
}
export default Component38288;
