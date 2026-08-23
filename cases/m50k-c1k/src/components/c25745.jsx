import React from 'react';
const LABEL_25745 = 'component_25745';
export function Component25745({ value = 25745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25745, 'data-value': derived.doubled }, children);
}
export default Component25745;
