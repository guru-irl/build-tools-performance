import React from 'react';
const LABEL_4175 = 'component_4175';
export function Component4175({ value = 4175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4175, 'data-value': derived.doubled }, children);
}
export default Component4175;
