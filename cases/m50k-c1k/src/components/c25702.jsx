import React from 'react';
const LABEL_25702 = 'component_25702';
export function Component25702({ value = 25702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25702, 'data-value': derived.doubled }, children);
}
export default Component25702;
