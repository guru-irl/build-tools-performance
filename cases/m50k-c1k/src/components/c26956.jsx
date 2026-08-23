import React from 'react';
const LABEL_26956 = 'component_26956';
export function Component26956({ value = 26956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26956, 'data-value': derived.doubled }, children);
}
export default Component26956;
