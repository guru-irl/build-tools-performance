import React from 'react';
const LABEL_37717 = 'component_37717';
export function Component37717({ value = 37717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37717, 'data-value': derived.doubled }, children);
}
export default Component37717;
