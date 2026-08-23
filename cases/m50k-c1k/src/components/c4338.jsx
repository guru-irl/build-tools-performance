import React from 'react';
const LABEL_4338 = 'component_4338';
export function Component4338({ value = 4338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4338, 'data-value': derived.doubled }, children);
}
export default Component4338;
