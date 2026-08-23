import React from 'react';
const LABEL_40410 = 'component_40410';
export function Component40410({ value = 40410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40410, 'data-value': derived.doubled }, children);
}
export default Component40410;
