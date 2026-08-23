import React from 'react';
const LABEL_35367 = 'component_35367';
export function Component35367({ value = 35367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35367, 'data-value': derived.doubled }, children);
}
export default Component35367;
